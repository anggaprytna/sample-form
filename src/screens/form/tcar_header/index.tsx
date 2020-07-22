import React from 'react';
import {View, SafeAreaView, StatusBar, TouchableHighlight} from 'react-native';
import {colors} from '../../../theme';
import styles from './styles';
import {Button, Form, Input, Item} from 'native-base';
import { connect } from "react-redux";
import {Text} from '../../../components/Elements';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

export class PreAssessmentQuestions extends React.Component {
  state = {
    buttonDisabled: false,
    date: "",
    tcarNo: 0,
  };

  componentDidMount() {
    this.setState({
      buttonDisabled: true,
    });
  }

  _handleSubmit = async () => {
    if (this.state.tcarNo == 0) {
      this.props.navigation.navigate('tcar_detail');
      // alert('Please insert your table number');
    } else {
      const data = {
        table: this.state.tcarNo
      };
      try {
        await this.props.dispatch(input(data));
        this.props.navigation.navigate('Result');
      } catch (err) {
        this.props.navigation.navigate('tcar_detail');
        // alert('Cannot register your table! \nPlease try again!');
      }
    }
  }

  nextButton() {
    return (
      <Button disabled={this.state.buttonDisabled} block onPress={this._handleSubmit} style={[{borderRadius: 5, height: 50}, {backgroundColor: (this.state.buttonDisabled ? colors.gray1 : colors.primary2)}]}>
        <Text type={'semibold'} size={17} style={{color: (this.state.buttonDisabled ? '#5a5a5a' : '#fff')}}>Next</Text>
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
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.gray5} barStyle="light-content" />
        <View style={styles.SafeAreaView}>
          <View style={styles.containerHeader}>
            <Text type={'regular'} style={styles.textHeader}>
              TCAR Header
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: colors.gray2}} />
          <ScrollView style={{marginHorizontal: 16}} showsVerticalScrollIndicator={false}>
            <Text type={'regular'} style={{marginTop: 20}}>
              TCAR No
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20, marginBottom: 5}}>
              TCAR Date
            </Text>
            <DatePicker
              style={{width: '100%'}}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2020-12-31"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: 5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderRadius: 5,
                  borderColor: colors.gray2,
                  height: 50,
                },
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
            <Text type={'regular'} style={{marginTop: 20}}>
              TCAR Status
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Employee Name
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Employee S/N
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} keyboardType="numeric"/>
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Departement
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Dept. Head
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Branch
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2}} regular={true}>
                <Input onChangeText={this._handleInput} />
              </Item>
            </Form>
            <Text type={'regular'} style={{marginTop: 20}}>
              Division
            </Text>
            <Form>
              <Item style={{borderRadius: 5, borderColor: colors.gray2, marginBottom: 20}} regular={true}>
                <Input onChangeText={this._handleInput} />
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
