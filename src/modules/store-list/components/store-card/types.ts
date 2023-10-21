import {Store} from '../../types';

export interface StoreCardProps extends Store {
  onStoreCardPress: () => void;
}
