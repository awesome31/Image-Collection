import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {APPEND_IMAGE_URL} from '../../../../constants/api';
import STRINGS from '../../constants';
import {VisitedCard} from '../../types';
import styles from './styles';

const VisitedListCard = (props: VisitedCard) => {
  const {images, storeName, userName, visitedAt, onImagePress} = props;

  const renderImage = (item: string) => {
    return (
      <TouchableOpacity onPress={onImagePress(item)}>
        <Image source={{uri: APPEND_IMAGE_URL(item)}} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <Text style={styles.visitedBy}>
        {STRINGS.visitedBy}
        <Text style={styles.visitedByName}>{userName}</Text>
        {STRINGS.on}
        <Text style={styles.visitedByName}>
          {new Date(visitedAt.seconds * 1000).toLocaleDateString()}
        </Text>
      </Text>
      <View style={styles.spacerOne} />
      <View style={styles.images}>{images.map(renderImage)}</View>
    </View>
  );
};

export default VisitedListCard;
