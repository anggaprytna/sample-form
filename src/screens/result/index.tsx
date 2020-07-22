import React from 'react';
import {View, SafeAreaView, StatusBar, TouchableHighlight} from 'react-native';
import {colors} from '../../theme';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Text} from '../../components/Elements';

import {useNavigation} from '@react-navigation/native';

const Result: Function = () => {
  return {};
};

const Home: Function = () => {
  const navigation = useNavigation();

  const navigateHome = (): void => {
    navigation.navigate('MyTabs');
  };

  return {navigateHome};
};

export default () => {
  const {} = Result();
  const {navigateHome} = Home();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary2} barStyle="light-content" />
      <View style={styles.SafeAreaView}>
        <View style={styles.containerHeader}>
          <Button style={styles.backButton} onPress={navigateHome}>
            <Icon
              name="keyboard-backspace"
              size={32}
              style={styles.iconHeader}
            />
          </Button>
          <Text type={'semibold'} style={styles.textHeader}>
            Result
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
