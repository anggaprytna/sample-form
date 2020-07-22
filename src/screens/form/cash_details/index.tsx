import React from 'react';
import {View, SafeAreaView, StatusBar, TouchableHighlight} from 'react-native';
import {colors} from '../../../theme';
import styles from './styles';
import {Button, Form, Input, Item} from 'native-base';
import { connect } from "react-redux";
import {Text} from '../../../components/Elements';
import {useNavigation} from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

export class PreAssessmentQuestions extends React.Component {
  state = {
    buttonDisabled: false,
    isModalVisible: false,
  };

  componentDidMount() {
    this.setState({
      buttonDisabled: false,
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
        // this.props.navigation.navigate('Result');
      } catch (err) {
        this.props.navigation.navigate('notes_remarks');
        // alert('Cannot register your table! \nPlease try again!');
      }
    }
  }

  renderModal() {
    return (
      <View>
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInTiming={10}
          animationOutTiming={10}
          backdropTransitionInTiming={10}
          backdropTransitionOutTiming={10}
          isVisible={this.state.isModalVisible}>
          <View style={{marginHorizontal: 0}}>
            <View style={styles.containerModal}>
              <Text type={'semibold'} size={16}>Delete Detail</Text>
              <Text type={'regular'} size={16} style={{marginTop: 10}}>Are you sure wanna delete this detail?</Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => {this.toggleModal()}}>
                  <View style={{backgroundColor: 'white', width: 120, marginRight: 10, borderWidth: 1, borderColor: colors.gray2, borderRadius: 5, height: 50, justifyContent: 'center'}}>
                    <Text type={'semibold'} color={'#7a7d7e'} size={15} style={{textAlign: 'center'}}>
                      Delete
                    </Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => {this.toggleModal()}}>
                  <View style={{backgroundColor: colors.gray2, width: 120, marginLeft: 10, borderWidth: 1, borderColor: colors.gray2, borderRadius: 5, height: 50, justifyContent: 'center'}}>
                    <Text type={'semibold'} color={colors.white} size={15} style={{textAlign: 'center'}}>
                      Cancel
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  nextButton() {
    return (
      <Button disabled={this.state.buttonDisabled} block onPress={this._handleSubmit} style={[{borderRadius: 5, height: 50}, {backgroundColor: (this.state.buttonDisabled ? colors.gray1 : colors.primary2)}]}>
        <Text type={'semibold'} size={17} style={{color: (this.state.buttonDisabled ? '#5a5a5a' : '#fff')}}>Next</Text>
    </Button>
    );
  }

  addButton() {
    return (
      <Button block style={{borderRadius: 5, height: 50, backgroundColor: colors.gray5}} onPress={() => {this.props.navigation.navigate('cash_details_add')}}>
        <Text type={'semibold'} size={17} style={{color: colors.primary2}}>Add Detail</Text>
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
            <Icon name="arrow-left" color={colors.gray1} size={27} />
            <Text type={'regular'} style={styles.textHeader}>
              Cash Detail
            </Text>
            <Icon name="arrow-right" color={'transparent'} size={27} />
          </View>
          <View style={{height: 1, backgroundColor: colors.gray2}} />
          <ScrollView style={{marginHorizontal: 16}} showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 20}}>
              {this.addButton()}
            </View>
            <View style={{marginTop: 20}}>
              <View style={{borderWidth: 1, borderRadius: 5, borderColor: colors.gray2}}>
                <View style={{marginHorizontal: 10, marginTop: 5}}>
                  <Text type={'regular'}>Domestic Travel - Airport Tax</Text>
                  <View style={{flexDirection: "row"}}>
                    <Text type={'semibold'}>IDR</Text>
                    <Text type={'regular'}>{' • '}</Text>
                    <Text type={'semibold'}>Rp. 120.000</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row", marginHorizontal: 10, marginBottom: 10, marginTop: 5}}>
                  <TouchableOpacity onPress={()=>{this.toggleModal()}}>
                    <View style={{width: 50, borderWidth: 1, borderColor: colors.gray2, height: 50, borderRadius: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
                     <Icon name="trash-2" color={colors.gray1} size={27} />
                    </View>
                  </TouchableOpacity>
                  <TouchableHighlight style={{flex:1}} underlayColor={'transparent'} onPress={() => {this.props.navigation.navigate('cash_details_edit')}}>
                    <View style={{flex: 1, borderWidth: 1, borderColor: colors.gray2, height: 50, borderRadius: 5, justifyContent: 'center'}}>
                      <Text type={'semibold'} style={{textAlign: 'center'}} size={15}>EDIT</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{borderWidth: 1, borderRadius: 5, borderColor: colors.gray2}}>
                <View style={{marginHorizontal: 10, marginTop: 5}}>
                  <Text type={'regular'}>Domestic Travel - Airport Tax</Text>
                  <View style={{flexDirection: "row"}}>
                    <Text type={'semibold'}>IDR</Text>
                    <Text type={'regular'}>{' • '}</Text>
                    <Text type={'semibold'}>Rp. 120.000</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row", marginHorizontal: 10, marginBottom: 10, marginTop: 5}}>
                  <TouchableOpacity onPress={()=>{this.toggleModal()}}>
                    <View style={{width: 50, borderWidth: 1, borderColor: colors.gray2, height: 50, borderRadius: 5, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
                     <Icon name="trash-2" color={colors.gray1} size={27} />
                    </View>
                  </TouchableOpacity>
                  <TouchableHighlight style={{flex:1}} underlayColor={'transparent'} onPress={() => {this.props.navigation.navigate('tcar_detail_edit')}}>
                    <View style={{flex: 1, borderWidth: 1, borderColor: colors.gray2, height: 50, borderRadius: 5, justifyContent: 'center'}}>
                      <Text type={'semibold'} style={{textAlign: 'center'}} size={15}>EDIT</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text type={'semibold'}>
                  Total
                </Text>
                <Text type={'semibold'}>
                  Rp. 120.000
                </Text>
              </View>
              <View style={{height: 1, backgroundColor: colors.gray5}}>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text type={'semibold'}>
                </Text>
                <Text type={'semibold'}>
                  USD $500
                </Text>
              </View>
            </View>           
          </ScrollView>
          {this.renderModal()}
        </View>
        <View style={styles.paddingButton}>
          {this.nextButton()}
        </View>
      </SafeAreaView>
    );
  }
}

export default PreAssessmentQuestions;
