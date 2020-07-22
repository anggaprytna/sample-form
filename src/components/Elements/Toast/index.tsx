import React from 'react';
import Toast from 'react-native-tiny-toast';
import {colors} from '../../../theme/index';

let toast: any;

export default function showToast(message: string, type: any, duration = 2000) {
  Toast.show(message, {
    position: -1,
    duration: duration,
    textColor: colors.primary,

    containerStyle: {
      backgroundColor:
        type == 'success'
          ? colors.success
          : type == 'error'
          ? colors.danger
          : type == 'info'
          ? colors.like
          : 'white',

      borderRadius: 10,
      padding: 20,
      margin: 10,
    },
  });
}

export function hideLoading() {
  Toast.hide(toast);
}

export function showLoading(message = '') {
  toast = Toast.showLoading(message, {
    position: 0,
    containerStyle: {
      padding: 30,
      backgroundColor: 'rgba(0,0,0, 0.7)',
    },
    textColor: 'white',
    textstyle: {fontSize: 16},

    // maskColor:'rgba(10, 10, 10, 0.5)'
  });
}

export function showErrorToast(message: string) {
  showToast(message, 'error');
}

export function showSuccessToast(message: string) {
  showToast(message, 'success');
}

export function showInfoToast(message: string) {
  showToast(message, 'info');
}
