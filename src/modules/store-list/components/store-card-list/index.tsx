import {FlatList, View} from 'react-native';
import {Store} from '../../types';
import StoreCard from '../store-card';
import styles from './styles';
import {StoreCardListProps} from './types';

const StoreCardList = (props: StoreCardListProps) => {
  const {stores, onStoreCardPress, loading} = props;

  const renderItem = ({item}: {item: Store}) => (
    <StoreCard {...item} onStoreCardPress={onStoreCardPress(item)} />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  if (stores.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={stores}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={renderSeperator}
      contentContainerStyle={styles.contentContainer}
      onEndReachedThreshold={0.6}
      maxToRenderPerBatch={20}
    />
  );
};

export default StoreCardList;
