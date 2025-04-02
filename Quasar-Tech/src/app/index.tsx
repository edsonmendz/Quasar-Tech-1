import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../rotas/types';
import estilos from "./componentes/botaocss";
import Loading from "./loading"; // Componente de Loading ou SplashScreen
import TopBar from './TopBar';
import SideBar from './SideBar';
import Home from "./home";

const Stack = createStackNavigator<RootStackParamList>(); // Aqui você passa a tipagem

const Index: React.FC = () => {
  const [maximoPerguntas, setMaximoPerguntas] = useState<number>(10); // Tipagem correta 
  const [showLoading, setShowLoading] = useState(true); // Controla a exibição da SplashScreen
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controle da sidebar

  const HomeWrapper = (props: any) => <Home {...props} maximoPerguntas={maximoPerguntas} />;

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  
  useEffect(() => {
    // Após 3 segundos, muda o estado para false, permitindo que a Home seja exibida
    const timer = setTimeout(() => {
      setShowLoading(false); // Esconde o SplashScreen e exibe a Home
    }, 3000);

    // Limpeza do timeout se o componente for desmontado antes de completar o tempo
    return () => clearTimeout(timer);
  }, []);
  

  // Mostra a tela de SplashScreen (Loading) enquanto showLoading é true
  if (false) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Exibindo a Sidebar se o menu estiver aberto */}
      {isMenuOpen && <SideBar closeMenu={closeMenu}  setMaximoPerguntas={setMaximoPerguntas} />}

      <View style={styles.container}>
        {/* Exibindo a TopBar */}
        <TopBar openMenu={openMenu} />

        {/* Stack de navegação */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen  name="Home">
          {props => <Home {...props} maximoPerguntas={maximoPerguntas} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
        </Stack.Screen>
        </Stack.Navigator>
      </View>
    </SafeAreaView>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Index;
