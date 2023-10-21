export interface UseStoreFilterData {
  filters: any;
  filtersVisible: any;
  onSelectOption: (filterName: string) => (index: number) => () => void;
  onShowFilter: (filterName: string) => () => void;
  onDismissFilter: (filterName: string) => () => void;
  hasSelectedFilters: (filterName: string) => boolean;
}
