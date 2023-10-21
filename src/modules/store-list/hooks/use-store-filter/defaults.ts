const FILTER_NAMES = {
  area: 'area',
  type: 'type',
  route: 'route',
};

const DEFAULT_FILTERS = {
  [FILTER_NAMES.area]: [],
  [FILTER_NAMES.type]: [],
  [FILTER_NAMES.route]: [],
};

const DEFAULT_FILTERS_VISIBLE = {
  [FILTER_NAMES.area]: false,
  [FILTER_NAMES.type]: false,
  [FILTER_NAMES.route]: false,
};

export {DEFAULT_FILTERS, DEFAULT_FILTERS_VISIBLE, FILTER_NAMES};
