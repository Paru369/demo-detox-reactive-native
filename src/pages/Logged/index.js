import React from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

import devlobersIcon from '../../assets/developersBR.png';

const Logged = () => {
  const { params } = useRoute();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>Seja bem vindo, {params.user}</Text>

        <Image source={devlobersIcon} style={{ width: 250, height: 250 }} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Logged; 