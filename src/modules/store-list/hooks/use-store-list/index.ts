import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import ROUTES from '../../../../constants/routes';
import AuthContext from '../../../navigator/context';
import {fetchStoresByStoreIds} from '../../firebase-services';
import useStoreFilter from '../use-store-filter';

export const PAGE_SIZE = 10;

const useStoreList = () => {
  const authData = useContext(AuthContext);
  const navigation: any = useNavigation();

  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const filtersData = useStoreFilter(stores);

  const getInitialData = () => {
    if (authData && authData.user && authData.user.stores) {
      const storeIds = authData.user.stores;

      fetchStoresByStoreIds(storeIds)
        .then((data: any) => {
          setStores(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    getInitialData();
  }, []);

  const onEndReached = () => {
    if (searchValue) return;
  };

  const onStoreCardPress = (store: any) => () => {
    navigation.navigate(ROUTES.STORE_DETAIL, {...store});
  };

  const onSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  return {
    authData,
    stores,
    onEndReached,
    onStoreCardPress,
    loading,
    searchValue,
    onSearchValueChange,
    ...filtersData,
  };
};

export default useStoreList;
