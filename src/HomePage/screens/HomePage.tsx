import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeAdmin = () => {
  const [memberName, setMemberName] = useState('');

  useEffect(() => {
    storeData();
  }, []);
  
  const storeData = async () => {
    const name = await AsyncStorage.getItem('name');
    try {
      setMemberName(name!);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text style={{color: 'black', fontSize:20}}>Welcome {memberName}</Text>
    </View>
  );
};
