const fiterStoreList =
  (stores: any[]) => (searchValue: string, filters: any) => {
    //Filter based on search value

    let filteredStores = stores;

    if (searchValue) {
      filteredStores = filteredStores.filter(store => {
        const storeName = store.name.toUpperCase();
        const searchValueUpperCase = searchValue.toUpperCase();

        return storeName.includes(searchValueUpperCase);
      });
    }

    Object.keys(filters).forEach(filterName => {
      const selected = filters[filterName].filter(
        (option: any) => option.selected,
      );

      if (selected.length) {
        filteredStores = filteredStores.filter(store => {
          return selected.some((option: any) => {
            return store[filterName] === option.label;
          });
        });
      }
    });

    return filteredStores;
  };

const getStoreFilters = (stores: any[]) => {
  const filters: any = {
    area: [],
    type: [],
    route: [],
  };

  stores.forEach(store => {
    if (!filters.area.includes(store.area)) {
      filters.area.push(store.area);
    }

    if (!filters.type.includes(store.type)) {
      filters.type.push(store.type);
    }

    if (!filters.route.includes(store.route)) {
      filters.route.push(store.route);
    }
  });

  filters.area = filters.area.map((area: string) => ({
    label: area,
    selected: false,
  }));

  filters.type = filters.type.map((type: string) => ({
    label: type,
    selected: false,
  }));

  filters.route = filters.route.map((route: string) => ({
    label: route,
    selected: false,
  }));

  return filters;
};

export {fiterStoreList, getStoreFilters};
