import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MyCheckbox from './componentes/MyCheckbox'

const Sidebar = ({ closeMenu }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Posição inicial da sidebar

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // A sidebar vai para a posição 0, ou seja, visível
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    > 
      <View style={[styles.hamburguer]}>
        <Text></Text>
        <Text style={[styles.botaoBranco, styles.flutuar]} >Menu</Text>
        <TouchableOpacity style={styles.fechar}  onPress={closeMenu}>
          <Icon style={[styles.botaoBranco]} name="x" size={30} />
        </TouchableOpacity>
      </View>      
      <View style={styles.menu}>
        <TouchableOpacity>
          <Text style={[styles.opcao, styles.botaoPreto]}>Option 1</Text>
          <MyCheckbox></MyCheckbox>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.opcao, styles.botaoPreto]}>Option 2</Text>
        </TouchableOpacity>
        {/* Mais opções */}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#fff',
    width: '70%',
    zIndex: 1,    
  },
  menu: {
    marginTop: '4%',
    paddingHorizontal: '5%',
  },
  botaoBranco: {
    color: '#fff',
    fontSize: 30,
  },
  botaoPreto: {
    color: '#000',
    fontSize: 25,
  },
  opcao: {    
    marginVertical: 15,
  },
  hamburguer: {   
    fontSize: 25,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#6200ee',
    width: '100%',
    height: '9%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  fechar: {
    maxWidth: '15%',
    paddingTop: '3%'
  },
  flutuar: {
    float: 'right',
    marginX: 'auto'
  }
});

export default Sidebar;
