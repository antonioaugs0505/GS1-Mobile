// src/screens/Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

const Login = () => {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#447FFC"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="SENHA"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#447FFC"
          textContentType="password"
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Não tem uma conta? Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#E4FAFF',
    borderRadius: 30,
    marginBottom: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 2,
    borderColor: '#447FFC',
    color: '#447FFC',
    width: '100%',
    textTransform: 'none',
  },
  error: {
    color: '#447FFC',
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#447FFC',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderWidth: 2,
    borderColor: '#447FFC',
  },
  buttonText: {
    color: '#E4FAFF',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  link: {
    color: '#447FFC',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Login;