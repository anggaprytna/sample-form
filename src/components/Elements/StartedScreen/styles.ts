import {StyleSheet, Dimensions} from 'react-native';

import {colors, fonts} from '../../../theme';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerData: {
    flex: 1,
    paddingVertical: 140,
    backgroundColor: colors.primary2,
  },
  image: {
    height: width / 1,
    width: width / 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonNext: {
    height: 60,
    width: 60,
    borderRadius: 35,
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    width: '60%',
    padding: 20,
    paddingVertical: 70,
  },
  bottom: {
    padding: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    height: '30%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.gray5,
  },
  textData: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    width: '100%',
  },
  textData2: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
  },
  containerStyle: {
    margin: 0,
    padding: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
  textSubData: {
    fontSize: 16,
    paddingLeft: 20,
  },
  TextButton: {
    alignSelf: 'center',
    marginTop: -3,
  },
  buttonLogin: {
    height: 50,
    width: width - 70,
    marginTop: 20,
  },
  containerTextSkip: {
    position: 'absolute',
    marginTop: 50,
    marginHorizontal: 25,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: width - 60,
  },
  containerTextBack: {
    position: 'absolute',
    marginTop: 50,
    marginHorizontal: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width - 60,
  },
});

export default styles;
