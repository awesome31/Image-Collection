import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Asset} from 'react-native-image-picker';

const uploadImagesToBucket = (assets: Asset[]) => {
  const promises = assets.map(asset => {
    if (asset.originalPath) {
      const reference = storage().ref(asset.fileName);
      return reference.putFile(asset.originalPath);
    }
  });

  return Promise.all(promises);
};

const addStoreVisit = async (
  assets: Asset[],
  userId: string,
  storeName: string,
  userName: string,
) => {
  const images = assets.map(asset => asset.fileName);

  await firestore()
    .collection('store_visits')
    .add({
      visitedAt: firestore.Timestamp.fromDate(new Date()),
      images,
      vistedBy: userId,
      storeName,
      userName,
    });
};

const getStoreVisits = (userName: string, storeName: string) => {
  return firestore()
    .collection('store_visits')
    .where('userName', '==', userName)
    .where('storeName', '==', storeName)
    .get();
};

export {uploadImagesToBucket, addStoreVisit, getStoreVisits};
