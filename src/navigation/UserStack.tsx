import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../theme/theme';
import { HomeUser } from '../User/screens/UserScreen';

const Stack = createNativeStackNavigator();

export const HomeUserStack = () => {
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
        name="HomeUser"
        options={{
          title: 'Home User',
        }}
        component={HomeUser}
      />
    </Stack.Navigator>
  );
};
