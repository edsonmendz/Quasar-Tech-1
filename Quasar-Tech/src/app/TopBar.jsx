import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TopBar = ({ openMenu }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openMenu}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Meu App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#6200ee',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TopBar;
