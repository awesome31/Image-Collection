import useStoreDetails from '../hooks';
import StoreDetailView from '../views';

const StoreDetailScreen = () => {
  const data = useStoreDetails();
  const params: any = data.params;

  return <StoreDetailView {...params} {...data} />;
};

export default StoreDetailScreen;
