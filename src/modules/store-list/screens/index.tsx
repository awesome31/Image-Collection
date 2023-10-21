import useStoreList from '../hooks/use-store-list';
import StoreListView from '../views';

const StoreListScreen = () => {
  const data = useStoreList();

  return <StoreListView name={data.authData?.user?.name} {...data} />;
};

export default StoreListScreen;
