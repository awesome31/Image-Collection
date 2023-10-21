export interface Store {
  address: string;
  area: string;
  id: string;
  name: string;
  route: string;
  type: string;
}

export interface VisitedCard {
  images: string[];
  storeName: string;
  userName: string;
  visitedAt: any;
  onImagePress: (image: string) => () => void;
}
