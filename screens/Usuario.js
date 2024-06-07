import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { Feather } from '@expo/vector-icons'; // Importando o ícone do Feather

const Usuario = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login'); // Redireciona para a tela de login após o logout
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleEdit = () => {
    navigation.navigate('Edit');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Meus Dados</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.text}>{user?.name}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.label}>CPF:</Text>
          <Text style={styles.text}>{user?.cpf}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{user?.email}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Senha:</Text>
          <Text style={styles.text}>{user?.password}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Feather name="edit" size={24} color="#E4FAFF" style={{ marginRight: 10 }} />
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <Menu active="Usuario" navigation={navigation} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Ajuste para posicionar o conteúdo mais para cima
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#447FFC', // Cor azul do menu
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center', // Centraliza os dados na horizontal
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#447FFC', // Cor azul do menu
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#000', // Cor preta
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#447FFC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#E4FAFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#E4FAFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Usuario;
