import {Image, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {APPEND_IMAGE_URL} from '../../../../constants/api';
import styles from './styles';
import {ImageModalProps} from './types';

const ImageModal = (props: ImageModalProps) => {
  const {imageModalImage, imageModalOnDismiss, imageModalVisible} = props;

  return (
    <Portal>
      <Modal
        visible={imageModalVisible}
        onDismiss={imageModalOnDismiss}
        contentContainerStyle={styles.modalContainer}>
        <View style={styles.modal}>
          <Image
            source={{uri: APPEND_IMAGE_URL(imageModalImage)}}
            style={styles.image}
          />
        </View>
      </Modal>
    </Portal>
  );
};

export default ImageModal;
