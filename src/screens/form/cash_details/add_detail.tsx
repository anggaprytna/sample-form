import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {colors} from '../../../theme';
import styles from './styles';
import {Button, Form, Input, Item} from 'native-base';
import { connect } from "react-redux";
import {Text} from '../../../components/Elements';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Feather';

export class PreAssessmentQuestions extends React.Component {
  state = {
    buttonDisabled: false,
    date: "",
    tableNo: 0,
  };

  componentDidMount() {
    this.setState({
      buttonDisabled: true,
    });
  }

  _handleSubmit = async () => {
    if (this.state.tcarNo == 0) {
      alert('Please insert your table number');
    } else {
      const data = {
        table: this.state.tcarNo
      };

      try {
        await this.props.dispatch(input(data));
        this.props.navigation.navigate('Result');
      } catch (err) {
        alert('Cannot register your table! \nPlease try again!');
      }
    }
  }

  nextButton() {
    return (
      <Button disabled={this.state.buttonDisabled} block onPress={this._handleSubmit} style={[{borderRadius: 5, height: 50}, {backgroundColor: (this.state.buttonDisabled ? colors.gray1 : colors.primary2)}]}>
        <Text type={'semibold'} size={17} style={{color: (this.state.buttonDisabled ? '#5a5a5a' : '#fff')}}>Save</Text>
    </Button>
    );
  }

  _handleInput = (num) => {
    this.setState({
      tableNo: num
    });

    if (num !== '') {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.gray5} barStyle="light-content" />
        <View style={styles.SafeAreaView}>
          <View style={styles.containerHeader}>
            <Icon name="x" color={colors.gray1} size={27} />
            <Text type={'regular'} style={styles.textHeader}>
              Add Detail
            </Text>
            <Icon name="arrow-right" color={'transparent'} size={27} />
          </View>
          <View style={{height: 1, backgroundColor: colors.gray2}} />
          <ScrollView style={{marginHorizontal: 16}} showsVerticalScrollIndicator={false}>
            <Text type={'regular'} style={{marginTop: 20}}>
              Expense Type
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Currency
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Cash Requested
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} keyboardType={'numeric'}/>
              </Item>
            </Form>
          </ScrollView>
        </View>
        <View style={styles.paddingButton}>
          {this.nextButton()}
        </View>
      </SafeAreaView>
    );
  }
}

export default PreAssessmentQuestions;
