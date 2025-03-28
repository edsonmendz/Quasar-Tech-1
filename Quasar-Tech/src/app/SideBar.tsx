import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Awesome from "react-native-vector-icons/FontAwesome"; // Biblioteca de ícones
import MyCheckbox from './componentes/MyCheckbox';
import Doacoes from './doacoes';


interface SidebarProps {
  closeMenu: () => void;
  setMaximoPerguntas: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarProps> = ({ closeMenu, setMaximoPerguntas }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Posição inicial da sidebar
  const [selectedValue, setSelectedValue] = useState<number | null>(10); // Definindo 10 como padrão

  const openURL = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Não foi possível abrir o link:", url);
    }
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // A sidebar vai para a posição 0, ou seja, visível
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  // useEffect para monitorar a alteração de selectedValue e passar para o componente pai
  useEffect(() => {
    if (selectedValue !== null) {
      setMaximoPerguntas(selectedValue);  // Atualiza maximoPerguntas no componente pai
    }
  }, [selectedValue, setMaximoPerguntas]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    > 
      <View style={[styles.hamburguer, styles.flexRow]}>
        <Text></Text>
        <Text style={[styles.botaoBranco]}>Menu</Text>
        <TouchableOpacity style={styles.fechar} onPress={closeMenu}>
          <Icon style={[styles.botaoBranco]} name="x" size={30} />
        </TouchableOpacity>
      </View>      
      <View style={styles.menu}>
        <View style={styles.flexRow}>
          <Text style={[styles.opcao, styles.botaoPreto]}>Perguntas: </Text>
          {[10, 20, 30].map((value) => (
            <MyCheckbox 
              key={value} 
              number={value} 
              isChecked={selectedValue === value} 
              onPress={() => {
                setSelectedValue(value);  // Atualiza o selectedValue com o valor selecionado
              }} 
            />
          ))}
        </View>    
        <TouchableOpacity>
          <Text style={[styles.opcao, styles.botaoPreto]}>Contato e Sugestões</Text>
        </TouchableOpacity>
        <View style={styles.links}>
          <TouchableOpacity onPress={() => openURL("mailto:edsonmendesfullstack@gmail.com")}>
            <Awesome name="envelope" size={30} color="#fff" style={styles.LinkVermelho} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL("https://github.com/edsonmendz")}>
            <Awesome name="github" size={30} color="#fff" style={styles.linkPreto} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL("https://www.linkedin.com/in/edson-mendes-fullsctack/")}>
            <Awesome name="linkedin" size={30} color="#fff" style={styles.linkAzul} />
          </TouchableOpacity>
        </View>
        <View>
          <Doacoes />
        </View>
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
  flexRow: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    marginTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  linkPreto: {
    fontSize: 30,
    color: '#000',
  },
  linkAzul: {    
      fontSize: 30,
      color: '#00f',
  },
  LinkVermelho: {
    fontSize: 30,
    color: '#f00',
  }    
});

export default Sidebar;
