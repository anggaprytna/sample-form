import {StyleSheet} from 'react-native';
import {colors, sizes, fonts} from '../../../theme/index';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary2,
    paddingVertical: 15,
    borderRadius: sizes.radiusMedium,
    alignItems: 'center',
  },
  dark: {
    backgroundColor: colors.dark,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  light: {
    backgroundColor: colors.light,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  textLight: {
    color: colors.black2,
    fontWeight: 'bold',
  },
  textDark: {
    color: colors.white,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});

export default styles;
