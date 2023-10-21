import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import STRINGS from '../../constants';
import styles from './styles';
import {AddStoreVisitProps} from './types';

const AddStoreVisit = (props: AddStoreVisitProps) => {
  const {onAddStoreVisit} = props;

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.button} onPress={onAddStoreVisit}>
        <Text style={styles.buttonText}>{STRINGS.addStoreVisit}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddStoreVisit;
