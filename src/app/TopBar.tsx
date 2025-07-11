import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const TopBar: React.FC<{ openMenu: () => void }> = ({ openMenu }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburguer} onPress={openMenu}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Estudos Específicos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '9%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 15,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 'auto'
  },
  hamburguer: {
    maxWidth: '10%',
  }
  
});

export default TopBar;
