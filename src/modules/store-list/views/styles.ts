import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryBlack,
  },
  welcomeContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  mainLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryWhite,
  },
  loadingContainer: {
    width: '100%',
    padding: 16,
  },
  loadingText: {
    fontSize: 16,
    color: COLORS.primaryBlack,
  },
});

export default styles;
