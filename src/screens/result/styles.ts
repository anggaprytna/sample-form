import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignContent: 'center',
  },
  containerHeader: {
    backgroundColor: colors.primary2,
    height: 120,
    paddingHorizontal: 20,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  backButton: {
    height: 40,
    width: 40,
    marginTop: 30,
  },
  textHeader: {
    fontSize: 21,
    color: colors.white,
    marginTop: 5,
  },
  iconHeader: {
    color: colors.white,
    paddingTop: 10,
  },
});

export default styles;
