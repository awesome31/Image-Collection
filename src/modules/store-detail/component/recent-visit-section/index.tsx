import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Asset} from 'react-native-image-picker';
import {Button, Icon, Text} from 'react-native-paper';
import COLORS from '../../../../constants/color';
import STRINGS from '../../constants';
import styles from './styles';
import {RecentVisitSectionProps} from './types';

const RecentVisitSection = (props: RecentVisitSectionProps) => {
  const {recentVisitImages, onAddImage, onRemoveImage, onUploadImages} = props;

  const renderImage = ({item, index}: {item: Asset; index: number}) => {
    return (
      <View>
        <Image source={{uri: item.originalPath}} style={styles.image} />
        <TouchableOpacity style={styles.close} onPress={onRemoveImage(index)}>
          <Icon source="close" size={15} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSeperator = () => <View style={styles.hSpacer} />;

  const renderHeader = () => {
    return (
      <TouchableOpacity style={styles.header} onPress={onAddImage}>
        <Icon source="camera" size={15} />
        <Text style={styles.addMore}>{STRINGS.addMoreImages}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {STRINGS.uploadImagesForRecentVisit}
        </Text>
        <View style={styles.spacerOne} />
        <FlatList
          data={recentVisitImages}
          renderItem={renderImage}
          keyExtractor={item => item.fileName || ''}
          ItemSeparatorComponent={renderSeperator}
          ListHeaderComponent={renderHeader}
          horizontal
        />
        <View style={styles.spacerOne} />
        <View style={styles.spacerOne} />
        <Button buttonColor={COLORS.primaryGreen} onPress={onUploadImages}>
          <Text style={styles.buttonText}>{STRINGS.uploadImages}</Text>
        </Button>
      </View>
    </View>
  );
};

export default RecentVisitSection;
