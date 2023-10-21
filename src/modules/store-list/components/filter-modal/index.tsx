import {TouchableOpacity, View} from 'react-native';
import {Checkbox, Modal, Portal, Text} from 'react-native-paper';
import COLORS from '../../../../constants/color';
import STRINGS from '../../constants';
import styles from './styles';
import {FilterModalProps} from './types';

const FilterModal = (props: FilterModalProps) => {
  const {heading, onDismiss, options, visible, onSelectOption} = props;

  const renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity style={styles.row} onPress={onSelectOption(index)}>
        <Checkbox
          status={item.selected ? 'checked' : 'unchecked'}
          onPress={onSelectOption(index)}
          color={COLORS.primaryGreen}
        />
        <View style={styles.hSpacer} />
        <Text style={styles.option}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              {STRINGS.filterBy}
              {heading}
            </Text>
          </View>
          <View style={styles.optionsContainer}>{options.map(renderItem)}</View>
        </View>
      </Modal>
    </Portal>
  );
};

export default FilterModal;
