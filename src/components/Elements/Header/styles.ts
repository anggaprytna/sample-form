import {StyleSheet} from 'react-native';

import {colors} from '../../../theme';

const styles = StyleSheet.create({
  default: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: colors.white,
  },
  backButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
