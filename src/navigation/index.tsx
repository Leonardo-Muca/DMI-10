import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Login} from '../Login/screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeStack } from './AdminStack';
import { HomeUserStack } from './UserStack';

export const AppNavigation = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [memberName, setMemberName] = useState('');

  useEffect(() => {
    storeData();
  }, [isLogged]);

  const storeData = async () => {
    const member = await AsyncStorage.getItem('tipo');
    try {
      setMemberName(member!);
    } catch (e) {
      console.log(e);
    }
  };

  const hanledToValidatelogin = (isValid: boolean) => setIsLogged(isValid);

  return (
    <NavigationContainer>
      {isLogged ? (
        <>{memberName == 'Admin' ? <HomeStack /> : <HomeUserStack />}</>
      ) : (
        <Login onPress={hanledToValidatelogin} />
      )}
    </NavigationContainer>
  );
};
