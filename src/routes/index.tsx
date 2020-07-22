import 'react-native-gesture-handler';

import React from 'react';
// import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Result from '../screens/result/';
import tcar_header from '../screens/form/tcar_header/';
import tcar_detail from '../screens/form/tcar_detail/';
import tcar_detail_add from '../screens/form/tcar_detail/add_detail';
import tcar_detail_edit from '../screens/form/tcar_detail/edit_detail';
import cash_details from '../screens/form/cash_details/';
import cash_details_add from '../screens/form/cash_details/add_detail';
import cash_details_edit from '../screens/form/cash_details/edit_detail';
import notes_remarks from '../screens/form/notes_remarks/';
import notes_remarks_add from '../screens/form/notes_remarks/add_detail';
import notes_remarks_edit from '../screens/form/notes_remarks/edit_detail';
import file_attachments from '../screens/form/file_attachments/';
import file_attachments_add from '../screens/form/file_attachments/add_detail';
import file_attachments_edit from '../screens/form/file_attachments/edit_detail';

function Private() {
  const PrivateStack = createStackNavigator();
  return (
    <NavigationContainer>
      <PrivateStack.Navigator initialRouteName="tcar_header" headerMode="none">
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="tcar_header"
          component={tcar_header}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="tcar_detail"
          component={tcar_detail}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="tcar_detail_add"
          component={tcar_detail_add}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="tcar_detail_edit"
          component={tcar_detail_edit}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="cash_details"
          component={cash_details}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="cash_details_edit"
          component={cash_details_edit}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="cash_details_add"
          component={cash_details_add}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="notes_remarks"
          component={notes_remarks}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="notes_remarks_edit"
          component={notes_remarks_edit}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="notes_remarks_add"
          component={notes_remarks_add}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="file_attachments"
          component={file_attachments}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="file_attachments_edit"
          component={file_attachments_edit}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="file_attachments_add"
          component={file_attachments_add}
        />
        <PrivateStack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name="Result"
          component={Result}
        />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default Private;
