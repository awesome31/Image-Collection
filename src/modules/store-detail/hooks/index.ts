import {useNavigation, useRoute} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Linking,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import {Asset, launchCamera} from 'react-native-image-picker';
import AuthContext from '../../navigator/context';
import STRINGS from '../constants';
import {
  addStoreVisit,
  getStoreVisits,
  uploadImagesToBucket,
} from '../firebase-services';

const useStoreDetails = () => {
  const auth = useContext(AuthContext);
  const {params} = useRoute<any>();
  const navigation = useNavigation();

  const [recentVisitImages, setRecentVisitImages] = useState<Asset[]>([]);
  const [visitedData, setVisitedData] = useState<any[]>([]);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageModalImage, setImageModalImage] = useState('');

  useEffect(() => {
    getStoreVisits(auth?.user.name, params?.name).then(querySnapshot => {
      const data: any[] = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      setVisitedData(data);
    });
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (recentVisitImages.length > 0) {
        Alert.alert(STRINGS.areYouSure, STRINGS.thereAreUnsavedChanges, [
          {
            text: STRINGS.no,
            onPress: () => {},
            style: 'destructive',
          },
          {
            text: STRINGS.yes,
            onPress: () => {
              setRecentVisitImages([]);
              navigation.goBack();
            },
          },
        ]);

        return true;
      }

      setRecentVisitImages([]);

      return false;
    });
  }, [recentVisitImages]);

  const onAddStoreVisit = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (granted === 'never_ask_again') {
      return Linking.openSettings();
    }

    if (granted) {
      launchCamera({mediaType: 'photo'}, response => {
        if (response.assets) {
          setRecentVisitImages(response.assets);
        }
      });
    }
  };

  const onRemoveImage = (index: number) => () => {
    const images = [...recentVisitImages];
    images.splice(index, 1);
    setRecentVisitImages(images);
  };

  const onAddImage = async () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.assets) {
        setRecentVisitImages([...recentVisitImages, ...response.assets]);
      }
    });
  };

  const onUploadImages = () => {
    uploadImagesToBucket(recentVisitImages);
    ToastAndroid.show(STRINGS.imagesWillBeUploaded, ToastAndroid.SHORT);

    addStoreVisit(
      recentVisitImages,
      auth?.user.userId,
      params?.name,
      auth?.user.name,
    ).then(() => {
      navigation.goBack();
    });
  };

  const onImagePress = (image: string) => () => {
    setImageModalVisible(true);
    setImageModalImage(image);
  };

  const imageModalOnDismiss = () => {
    setImageModalImage('');
    setImageModalVisible(false);
  };

  return {
    params,
    onAddStoreVisit,
    recentVisitImages,
    onRemoveImage,
    onAddImage,
    onUploadImages,
    visitedData,
    imageModalImage,
    imageModalVisible,
    onImagePress,
    imageModalOnDismiss,
  };
};

export default useStoreDetails;
