import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigation = useNavigation();
  const { registerUser } = useAuth();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(name, cpf, email, password);
      navigation.navigate('Login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="NOME"
          autoCapitalize="none"
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor="#447FFC"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          autoCapitalize="none"
          value={cpf}
          onChangeText={text => setCpf(text)}
          placeholderTextColor="#447FFC"
        />
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#447FFC"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="SENHA"
          autoCapitalize="none"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          placeholderTextColor="#447FFC"
          textContentType="password"
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>REGISTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem uma conta? Entre</Text>
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
  logo: {
    width: 280,
    height: 160,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 80,
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

export default Register;
