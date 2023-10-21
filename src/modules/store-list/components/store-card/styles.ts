import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.primaryGreen,
  },
  cardTextTitle: {
    color: COLORS.primaryBlack,
    fontSize: 16,
    fontWeight: '900',
  },
  address: {
    color: COLORS.primaryGrey,
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  cardTextSubTitle: {
    color: COLORS.primaryBlack,
    fontSize: 10,
  },
  spacerOne: {
    height: 8,
  },
  spacerTwo: {
    height: 16,
  },
  spacerThree: {
    height: 4,
  },
  areaAndRoute: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  chip: {
    backgroundColor: COLORS.primaryBlue,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  chipText: {
    color: COLORS.primaryWhite,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.primaryGreen,
  },
  buttonText: {
    color: COLORS.primaryWhite,
    fontWeight: 'bold',
  },
});

export default styles;
