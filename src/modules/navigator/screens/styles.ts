import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 48,
  },
});

export default styles;
