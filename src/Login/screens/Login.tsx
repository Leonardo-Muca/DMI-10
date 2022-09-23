import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  AppRegistry,
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

  const login = async () => {
    if (email && password) {
      if (email == 'admin@admin.com' && password == 'admin') {
        onPress(true);
        await AsyncStorage.setItem('tipo', 'Admin');
      }
      if (email == 'user@user.com' && password == 'user') {
        onPress(true);
        await AsyncStorage.setItem('tipo', 'User');
      }
    }
  };

  return (
    <View style={{flex: 100}}>
      <View style={styles.firstContainer}>
        <Text style={styles.textEscanner}>Sing In</Text>
        <View style={styles.spaceCode}></View>
      </View>
      <KeyboardAvoidingView style={styles.secondContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Correo Electronico'}
          placeholderTextColor={'white'}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          placeholderTextColor={'white'}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => login()} style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
