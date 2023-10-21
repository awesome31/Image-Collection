import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import COLORS from '../../../../constants/color';
import STRINGS from '../../constants';
import styles from './styles';
import {StoreSearchProps} from './types';

const StoreSearch = (props: StoreSearchProps) => {
  const {onSearchValueChange, searchValue} = props;

  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={searchValue}
        placeholder={STRINGS.searchForStores}
        placeholderTextColor={COLORS.primaryBlue}
        onChangeText={onSearchValueChange}
        mode="outlined"
        style={styles.inputContainer}
        activeOutlineColor={COLORS.primaryBlue}
        outlineColor={COLORS.primaryBlue}
        right={<TextInput.Icon icon="card-search-outline" />}
      />
    </View>
  );
};

export default StoreSearch;
