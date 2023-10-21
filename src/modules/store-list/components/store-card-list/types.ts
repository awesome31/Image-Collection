import {Store} from '../../types';

export interface StoreCardListProps {
  stores: Store[];
  onStoreCardPress: (store: Store) => () => void;
  loading: boolean;
}
