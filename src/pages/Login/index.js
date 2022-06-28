import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';

import loginIcon from '../../assets/loginIcon.png';
import { useEffect } from 'react';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogIn = () => {
    if (username != 'admin' || password != 'admin') {
      setIsError(true);
    } else {
      navigation.navigate('Logged', { user: username });
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image source={loginIcon} style={{ width: 200, height: 200 }} />

        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.inputText}
          placeholder="Usuário"
          returnKeyType='next'
          testID='inputUser'
        />

        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.inputText}
          placeholder="Senha"
          testID='inputPassword'
        />

        <TouchableOpacity style={styles.button} onPress={handleLogIn} title="Log in" testID='buttonLogin'>
          <Text style={styles.textButton}>Log In</Text>
        </TouchableOpacity>

        {isError && (
          <View style={styles.errorView}>
            <Text testID='messageError' style={styles.errorText}>Usuário ou senha inválido</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;