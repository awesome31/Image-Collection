import {Asset} from 'react-native-image-picker';

export interface RecentVisitSectionProps {
  recentVisitImages: Asset[];
  onRemoveImage: (index: number) => () => void;
  onAddImage: () => void;
  onUploadImages: () => void;
}
