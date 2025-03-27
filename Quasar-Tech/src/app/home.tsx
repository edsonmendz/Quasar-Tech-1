import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Button from "./componentes/botao";
import { Link } from "expo-router";
import { RootStackParamList } from './rotas/types'; // Caminho onde você definiu RootStackParamList
import { RouteProp, useRoute } from '@react-navigation/native'; // Use para pegar os parâmetros da rota
import estilos from "./componentes/botaocss";

type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeProps {
  maximoPerguntas: number;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HomeProps> = ({ maximoPerguntas, isMenuOpen ,setIsMenuOpen }) => {
  // Obtém os parâmetros da navegação com a tipagem correta  

  

  return (   

    <TouchableWithoutFeedback 
      onPress={() => {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
        Keyboard.dismiss(); // Esconde o teclado se estiver aberto
      }}
    >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={estilos.largura96}>
        <Link
          href={{ pathname: "/Perguntas", params: { nomeArquivo: "Tpp", maximoPerguntas } }}
          asChild
        >
          <Button title="Transporte de Produtos Perigosos - TPP" />
        </Link>
        <Link
          href={{ pathname: "/Perguntas", params: { nomeArquivo: "Tci", maximoPerguntas } }}
          asChild
        >
          <Button title={"Transporte de Cargas Indivisíveis - TCI"} />
        </Link>
        <Link
          href={{ pathname: "/Perguntas", params: { nomeArquivo: "Ctp", maximoPerguntas } }}
          asChild
        >
          <Button title={"Curso de Transporte de Passageiros - CTP"} />
        </Link>
        <Link
          href={{ pathname: "/Perguntas", params: { nomeArquivo: "Cte", maximoPerguntas } }}
          asChild
        >
          <Button title={"Curso de Transporte Escolar - CTE"} />
        </Link>
        <Link
          href={{ pathname: "/Perguntas", params: { nomeArquivo: "Socorrista", maximoPerguntas } }}
          asChild
        >
          <Button title={"Socorrista"} />
        </Link>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
