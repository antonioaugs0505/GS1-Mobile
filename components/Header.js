// src/components/Header.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ADD8FF',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  logo: {
    width: 250, // Ajuste o tamanho conforme necessário
    height: 120, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain',
  },
});

export default Header;
