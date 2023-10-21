import {FlatList, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import COLORS from '../../../../constants/color';
import {capitalize} from '../../../../utils';
import STRINGS from '../../constants';
import {FILTER_NAMES} from '../../hooks/use-store-filter/defaults';
import FilterModal from '../filter-modal';
import styles from './styles';
import {FilterSectionProps} from './types';

const FiltersSection = (props: FilterSectionProps) => {
  const {
    filters,
    filtersVisible,
    hasSelectedFilters,
    onDismissFilter,
    onSelectOption,
    onShowFilter,
  } = props;

  const renderChip = ({item}: {item: string}) => {
    const selected = hasSelectedFilters(item);

    if (!selected) {
      return (
        <TouchableOpacity
          style={styles.chipUnselected}
          onPress={onShowFilter(item)}>
          <Text style={styles.chipText}>{capitalize(item)}</Text>
          <View style={styles.hSpacer} />
          <Icon
            source="arrow-down-drop-circle-outline"
            color={COLORS.primaryWhite}
            size={15}
          />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity style={styles.chip} onPress={onShowFilter(item)}>
        <Text style={styles.chipText}>{capitalize(item)}</Text>
        <View style={styles.hSpacer} />
        <Icon
          source="arrow-down-drop-circle-outline"
          color={COLORS.primaryWhite}
          size={15}
        />
      </TouchableOpacity>
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(filters)}
        renderItem={renderChip}
        ItemSeparatorComponent={renderSeperator}
        horizontal
      />
      <FilterModal
        visible={filtersVisible[FILTER_NAMES.area]}
        options={filters[FILTER_NAMES.area]}
        onSelectOption={onSelectOption(FILTER_NAMES.area)}
        onDismiss={onDismissFilter(FILTER_NAMES.area)}
        heading={STRINGS.area}
      />
      <FilterModal
        visible={filtersVisible[FILTER_NAMES.type]}
        options={filters[FILTER_NAMES.type]}
        onSelectOption={onSelectOption(FILTER_NAMES.type)}
        onDismiss={onDismissFilter(FILTER_NAMES.type)}
        heading={STRINGS.type}
      />
      <FilterModal
        visible={filtersVisible[FILTER_NAMES.route]}
        options={filters[FILTER_NAMES.route]}
        onSelectOption={onSelectOption(FILTER_NAMES.route)}
        onDismiss={onDismissFilter(FILTER_NAMES.route)}
        heading={STRINGS.route}
      />
    </View>
  );
};

export default FiltersSection;
