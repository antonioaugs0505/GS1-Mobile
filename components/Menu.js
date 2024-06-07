// src/components/Menu.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = ({ navigation, active }) => {
  const tabs = [
    { name: 'Home', route: 'Home', icon: 'home' },
    { name: 'Quiz', route: 'Quiz', icon: 'clipboard' },
    { name: 'Usuário', route: 'Usuario', icon: 'person' }
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.route}
          style={[styles.tab, active === tab.route && styles.activeTab]}
          onPress={() => navigation.navigate(tab.route)}
        >
          <Icon
            name={tab.icon}
            size={24}
            color={active === tab.route ? '#E4FAFF' : '#E4FAFF'} // cor dos textos e logos
            style={styles.icon}
          />
          <Text style={[styles.tabText, active === tab.route && styles.activeText]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#447FFC', // cor de fundo
    borderTopWidth: 1,
    borderTopColor: '#E4FAFF', // cor da borda superior
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  activeTab: {
    backgroundColor: '#0026b6' // cor um pouco mais escura que o padrão
  },
  icon: {
    marginBottom: 5
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E4FAFF' // cor do texto padrão
  },
  activeText: {
    color: '#fff' // cor do texto ativo
  }
});

export default Menu;
