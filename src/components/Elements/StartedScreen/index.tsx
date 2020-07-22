import React from 'react';
import {View, Dimensions, StatusBar, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Button} from '../../../components/Elements';
import {colors, fonts} from '../../../theme';
import {useNavigation} from '@react-navigation/native';

import {Text} from '../index';
import styles from './styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

type PropsStartedScreens = {
  data: Array<Object>;
};

type stateData = {
  item: any;
  index: number;
};

const Component: any = () => {
  const _renderItem: React.FC<stateData> = ({item}) => {
    return (
      <View style={styles.containerData}>
        <View style={styles.textData}>
          <Image source={item.image} style={styles.image} />
        </View>
      </View>
    );
  };
  return {_renderItem};
};

const StartedScreen: React.FC<PropsStartedScreens> = ({data}) => {
  const {_renderItem} = Component();

  const [state, setState] = React.useState({
    refsCrousel: null,
    activeDotIndex: 0,
    colorButton: null,
    index: 0,
    data: data[0].title,
    text: data[0].text,
  });

  let {width} = Dimensions.get('window');

  const OnlineInterview: Function = () => {
    const navigation = useNavigation();
  
    const navigateOnlineInterview = (): void => {
      navigation.navigate('Login');
    };
  
    return {navigateOnlineInterview};
  };

  const {navigateOnlineInterview} = OnlineInterview();
  
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        lockScrollWhileSnapping={false}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onSnapToItem={index =>
          setState({
            ...state,
            index: index,
            data: data[index ? index : 0].title,
            text: data[index ? index : 0].text,
          })
        }
      />
      {state.index == 0 ?<View style={styles.containerTextSkip}>
      <TouchableHighlight onPress={navigateOnlineInterview} underlayColor={'transparent'}>
        <Text type='semibold' color={'white'} size={16}>
          SKIP
        </Text>
      </TouchableHighlight>
      </View>
      : state.index == 1 ?
      <View style={styles.containerTextBack}>
        <Text type='semibold' color={'white'} size={16}>
          BACK
        </Text>
        <TouchableHighlight onPress={navigateOnlineInterview} underlayColor={'transparent'}>
          <Text type='semibold' color={'white'} size={16}>
            SKIP
          </Text>
      </TouchableHighlight>
      </View>
      :<View style={styles.containerTextBack}>
      <Text type='semibold' color={'white'} size={16}>
        BACK
      </Text>
    </View>
      }
      <View style={styles.bottom}>
        <Text type="semibold" size={18} style={styles.textData}>
          {state.text}
        </Text>
        <Text type="regular" size={15} style={styles.textData2}>
          {state.data}
        </Text>
        {state.index == 2 ?
        <TouchableHighlight onPress={navigateOnlineInterview} underlayColor={'transparent'}>
          <Button type={'primary'} style={styles.buttonLogin}>
            <Text
              type="semibold"
              size={16}
              color={'white'}
              style={styles.TextButton}>
              LOGIN
            </Text>
          </Button>
        </TouchableHighlight>
        :
        <Pagination
          dotsLength={data.length}
          activeDotIndex={state.index}
          dotStyle={styles.dot}
          containerStyle={styles.containerStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />}
      </View>
    </View>
  );
};

export default StartedScreen;
