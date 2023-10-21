import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/color';

const styles = StyleSheet.create({
  main: {
    padding: 16,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLORS.cloudGray,
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.primaryWhite,
  },
  button: {
    height: 48,
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryGreen,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryWhite,
  },
});

export default styles;
