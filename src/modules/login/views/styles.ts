import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  loginText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primaryBlack,
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    marginTop: 32,
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
  },
  spacerOne: {
    height: 16,
  },
  spacerTwo: {
    height: 24,
  },
  buttonContainer: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
