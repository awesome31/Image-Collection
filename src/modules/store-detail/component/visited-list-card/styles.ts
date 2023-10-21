import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/color';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.primaryBlue,
  },
  visitedBy: {
    fontSize: 14,
  },
  visitedByName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
    marginRight: 8,
  },
  spacerOne: {
    height: 12,
  },
  images: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
});

export default styles;
