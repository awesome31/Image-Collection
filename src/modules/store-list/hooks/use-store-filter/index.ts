//Here we will keep the logic of all the filters.

import {useEffect, useState} from 'react';
import {getStoreFilters} from '../../utils';
import {DEFAULT_FILTERS, DEFAULT_FILTERS_VISIBLE} from './defaults';
import {UseStoreFilterData} from './types';

const useStoreFilter = (stores: any[]): UseStoreFilterData => {
  const [filters, setFilters] = useState<any>(DEFAULT_FILTERS);
  const [filtersVisible, setFiltersVisible] = useState<any>(
    DEFAULT_FILTERS_VISIBLE,
  );

  useEffect(() => {
    setFilters(getStoreFilters(stores));
  }, [stores]);

  const onSelectOption = (filterName: string) => (index: number) => () => {
    const newFilters = {...filters};
    newFilters[filterName][index].selected =
      !newFilters[filterName][index].selected;
    setFilters(newFilters);
  };

  const onShowFilter = (filterName: string) => () => {
    const newFiltersVisible = {...filtersVisible};
    newFiltersVisible[filterName] = true;
    setFiltersVisible(newFiltersVisible);
  };

  const onDismissFilter = (filterName: string) => () => {
    const newFiltersVisible = {...filtersVisible};
    newFiltersVisible[filterName] = false;
    setFiltersVisible(newFiltersVisible);
  };

  const hasSelectedFilters = (filterName: string) => {
    return filters[filterName].some((option: any) => option.selected);
  };

  return {
    filters,
    filtersVisible,
    onSelectOption,
    onShowFilter,
    onDismissFilter,
    hasSelectedFilters,
  };
};

export default useStoreFilter;
