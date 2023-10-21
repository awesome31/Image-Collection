import {FilterSectionProps} from '../components/filters-section/types';
import {StoreCardListProps} from '../components/store-card-list/types';
import {StoreSearchProps} from '../components/store-search/types';

export interface StoreListViewsProps
  extends StoreCardListProps,
    StoreSearchProps,
    FilterSectionProps {
  name: string;
}
