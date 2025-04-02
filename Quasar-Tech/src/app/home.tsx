import React, { useEffect, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import Button from "./componentes/botao";
import { Link } from "expo-router";
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
            <Link
              href={{ pathname: "/Perguntas", params: { nomeArquivo: "AcessoPorCordas", maximoPerguntas } }}
              asChild
            >
              <Button title={"Acesso Por Cordas"} />
            </Link>
            <Link
              href={{ pathname: "/Perguntas", params: { nomeArquivo: "Bombeiro Civil", maximoPerguntas } }}
              asChild
            >
              <Button title={"Bombeiro Civil"} />
            </Link>
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
              href={{ pathname: "/Perguntas", params: { nomeArquivo: "OficialDeJustica", maximoPerguntas } }}
              asChild
            >
              <Button title={"Oficial de Justiça"} />
            </Link>
            <Link
              href={{ pathname: "/Perguntas", params: { nomeArquivo: "SegurancaDoTrabalho", maximoPerguntas } }}
              asChild
            >
              <Button title={"Segurança do Trabalho"} />
            </Link>
            <Link
              href={{ pathname: "/Perguntas", params: { nomeArquivo: "Socorrista", maximoPerguntas } }}
              asChild
            >
              <Button title={"Socorrista"} />
            </Link>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
