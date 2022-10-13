import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AppRegistry,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/HomeStyles';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  onPress: (isValidateLogin: boolean) => void;
}

export const Login = ({onPress}: Props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const accesLogin = async () => {
    if (email && password) {
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
      };
      fetch(
        'https://equipo4-4c-2do-parcial-awos.herokuapp.com/api/login',
        requestOptions,
      )
        .then(response => response.json())
        .then(async data => {
          if (data.ok == true) {
            onPress(true);
            await AsyncStorage.setItem('tipo', 'Admin');
            await AsyncStorage.setItem('name', data.usrDB.name);
          }
        });
    } else {
      console.log('Campos requeridos');
    }
  };

  return (
    <View style={{flex: 100, backgroundColor: 'white'}}>
      <View style={styles.firstContainer}>
        <Image
          source={require('../../../assets/img/spotify.png')}
          style={styles.img}
        />
      </View>
      <KeyboardAvoidingView style={styles.secondContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Email address or username'}
          placeholderTextColor={'black'}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => accesLogin()} style={styles.button}>
          <Text style={styles.textButton}>LOG IN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.thirdContainer}>
        <Text style={styles.forgotPassword}>Forgot your passwrod?</Text>
      </View>
    </View>
  );
};
