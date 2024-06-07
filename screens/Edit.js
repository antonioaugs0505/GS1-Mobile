// src/screens/Edit.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { useAuth } from '../context/AuthContext';

const Edit = ({ navigation }) => {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user.name);
  const [cpf, setCPF] = useState(user.cpf);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      await updateUser({ name, cpf, email, password });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Editar Perfil</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCPF}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <Menu navigation={navigation} active="Usuario" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8FF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#447FFC',
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
  button: {
    backgroundColor: '#447FFC',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#E4FAFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Edit;
