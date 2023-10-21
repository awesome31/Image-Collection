import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: COLORS.primaryWhite,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryBlue,
  },
  seperator: {
    width: 8,
  },
  chip: {
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: COLORS.primaryGreen,
  },
  chipUnselected: {
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 100,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: COLORS.primaryBlue,
  },
  chipText: {
    color: COLORS.primaryWhite,
    fontSize: 12,
  },
  hSpacer: {
    width: 4,
  },
});

export default styles;
