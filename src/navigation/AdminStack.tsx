import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../theme/theme';
import {HomeAdmin} from '../Admin/screens/AdminScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={route => ({
        headerBackVisible: true,
        headerRightContainerStyle: {
          alignSelf: 'center',
        },
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerBackButtonMenuEnabled: false,
        headerTintColor: 'white',
      })}>
      <Stack.Screen
        name="HomeAdmin"
        options={{
          title: 'Home Admin',
        }}
        component={HomeAdmin}
      />
    </Stack.Navigator>
  );
};
