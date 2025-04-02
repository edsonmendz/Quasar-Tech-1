import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import Button from "./componentes/botao";
import { Link } from "expo-router";
import questoes from './questoes';
import { RootStackParamList } from '../rotas/types'; // Caminho onde você definiu RootStackParamList
import { RouteProp, useRoute } from '@react-navigation/native'; // Use para pegar os parâmetros da rota
import estilos from "./componentes/botaocss"
type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
import * as amplitude from '@amplitude/analytics-react-native'; // Amplitude, tomara que funcione

interface HomeProps {
  maximoPerguntas: number;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeProps> = ({ maximoPerguntas, isMenuOpen, setIsMenuOpen }) => {
  // Obtém os parâmetros da navegação com a tipagem correta  
  const questoesOrdenadas = [...questoes].sort((a, b) => a.title.localeCompare(b.title));
  

  useEffect(() => {
    amplitude.init('bba4fc780cfe4d4ec23cc86d0a1e6f5c');
    amplitude.track('Menu Aberto, dentro do useEffect!');  
  }, [])

  return (

    <TouchableWithoutFeedback
      onPress={() => {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        Keyboard.dismiss(); // Esconde o teclado se estiver aberto
      }}
    >
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={[estilos.centralizar, estilos.largura100]}>
          <View style={[estilos.largura90, estilos.margemVertical]} >          
            {questoesOrdenadas.map((curso) => (
                <Link
                    key={curso.tag}
                    href={{ pathname: "/Perguntas", params: { nomeArquivo: curso.tag, maximoPerguntas } }}
                    asChild
                >
                    <Button title={curso.title} />
                </Link>
            ))}        
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
