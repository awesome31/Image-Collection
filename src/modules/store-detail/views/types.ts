import {AddStoreVisitProps} from '../component/add-store-visit/types';
import {ImageModalProps} from '../component/image-modal/types';
import {RecentVisitSectionProps} from '../component/recent-visit-section/types';
import {StoreHeaderProps} from '../component/store-header/types';
import {VisitedListProps} from '../component/visted-list/types';

export interface StoreDetailViewProps
  extends StoreHeaderProps,
    AddStoreVisitProps,
    RecentVisitSectionProps,
    VisitedListProps,
    ImageModalProps {}
