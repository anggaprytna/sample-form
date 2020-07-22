import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignContent: 'center',
  },
  containerHeader: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 55,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  textHeader: {
    fontSize: 21,
    color: colors.primary2,
    marginTop: 10,
  },
  paddingButton: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  flexdirectionRow: {
    flexDirection: 'row',
  },
});

export default styles;
