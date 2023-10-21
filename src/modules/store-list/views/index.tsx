import {ActivityIndicator, View} from 'react-native';
import {Text} from 'react-native-paper';
import FiltersSection from '../components/filters-section';
import StoreCardList from '../components/store-card-list';
import StoreSearch from '../components/store-search';
import STRINGS from '../constants';
import {fiterStoreList} from '../utils';
import styles from './styles';
import {StoreListViewsProps} from './types';

const StoreListView = (props: StoreListViewsProps) => {
  const {name, stores, filters, searchValue, loading} = props;

  if (loading) {
    return (
      <View style={styles.mainLoader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
          {STRINGS.welcomeBack}
          {name}
        </Text>
      </View>
      <StoreSearch {...props} />
      <FiltersSection {...props} />
      <StoreCardList
        {...props}
        stores={fiterStoreList(stores)(searchValue, filters)}
      />
    </View>
  );
};

export default StoreListView;
