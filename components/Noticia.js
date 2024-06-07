import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const Noticia = ({ item }) => {
  const { nm_Titulo: title, dt_Noticia: date, nm_Subtitulo: subtitle, ds_Imagem: image, ds_Link: link } = item;

  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity style={[styles.container, styles.cardMargin]} onPress={handlePress}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Leia Mais</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    backgroundColor: '#E4FAFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#447FFC',
    overflow: 'hidden',
  },
  cardMargin: {
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#447FFC',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#447FFC',
    borderRadius: 15,
    paddingVertical: 10, // Ajuste aqui para diminuir o tamanho do botão
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#E4FAFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Noticia;
