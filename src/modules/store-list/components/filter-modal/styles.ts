import {StyleSheet} from 'react-native';
import COLORS from '../../../../constants/color';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 16,
  },
  modal: {
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 8,
  },
  headingContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cloudGray,
    padding: 16,
  },
  optionsContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primaryBlack,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  option: {
    fontSize: 14,
    color: COLORS.primaryBlack,
  },
  hSpacer: {
    width: 4,
  },
  applyButton: {
    backgroundColor: COLORS.primaryGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  applyButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primaryWhite,
  },
});

export default styles;
