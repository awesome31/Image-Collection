import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/color';

const styles = StyleSheet.create({
  main: {
    padding: 16,
  },
  container: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.primaryGreen,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primaryBlack,
  },
  spacerOne: {
    height: 12,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
  },
  hSpacer: {
    width: 8,
  },
  header: {
    height: 80,
    width: 80,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
    marginRight: 8,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    height: 24,
    width: 24,
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    right: 1,
    top: 1,
  },
  addMore: {
    fontSize: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: COLORS.primaryWhite,
    fontWeight: 'bold',
  },
});

export default styles;
