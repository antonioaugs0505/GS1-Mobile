import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Menu from '../components/Menu';
import Noticia from '../components/Noticia';
import Header from '../components/Header';
import noticias from '../api/noticiapi'; // Importando os dados reais das notícias

const Home = ({ navigation }) => {
  const renderNoticia = ({ item }) => <Noticia item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Feed de Notícias</Text>
        <FlatList
          data={noticias._embedded.noticiaModelList}
          renderItem={renderNoticia}
          keyExtractor={item => item.id_Noticia.toString()}
        />
      </View>
      <Menu navigation={navigation} active="Home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8FF',
    paddingBottom: 45,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#447FFC',
  }
});

export default Home;
