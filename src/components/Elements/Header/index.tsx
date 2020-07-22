import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {colors} from '../../../theme';
import {Text} from '../index';
import styles from './styles';

type PropsHeader = {
  backAction?: boolean;
  title: string;
  onPress?: () => void;
};

const Header: React.FC<PropsHeader> = ({backAction, title}) => {
  const Touchable: any =
      Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback,
    colorOpacity: string = colors.like + '50';

  return (
    <SafeAreaView>
      <View style={[styles.default]}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary2} />
        {backAction && (
          <Touchable
            onPress={() => console.warn('as')}
            underlayColor={colorOpacity}
            background={TouchableNativeFeedback.Ripple('', true)}
            style={Platform.OS === 'ios' && styles.backButton}>
            <View style={Platform.OS !== 'ios' && styles.backButton}>
              <Icon name="arrow-left" color={colors.white} size={24} />
            </View>
          </Touchable>
        )}
        <Text type="regular" style={styles.textHeader}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
