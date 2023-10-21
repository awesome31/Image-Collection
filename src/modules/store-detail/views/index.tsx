import {ScrollView, View} from 'react-native';
import AddStoreVisit from '../component/add-store-visit';
import ImageModal from '../component/image-modal';
import RecentVisitSection from '../component/recent-visit-section';
import StoreHeader from '../component/store-header';
import VisitedList from '../component/visted-list';
import styles from './styles';
import {StoreDetailViewProps} from './types';

const StoreDetailView = (props: StoreDetailViewProps) => {
  const {recentVisitImages} = props;

  return (
    <>
      <ScrollView style={styles.main}>
        <StoreHeader {...props} />
        {recentVisitImages.length > 0 ? (
          <RecentVisitSection {...props} />
        ) : null}
        <VisitedList {...props} />
        <View style={styles.spacerOne} />
      </ScrollView>
      {recentVisitImages?.length > 0 ? null : <AddStoreVisit {...props} />}
      <ImageModal {...props} />
    </>
  );
};

export default StoreDetailView;
