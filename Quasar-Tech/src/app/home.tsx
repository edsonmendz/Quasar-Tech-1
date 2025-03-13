import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "./componentes/botao";
import { createStackNavigator } from "@react-navigation/stack";
import { Link, Route } from "expo-router";

const Home = () => {  

  // Renderiza a tela principal (Home) após o tempo de SplashScreen
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 35, marginBottom:30 }}>🏠 Escolha a matéria</Text>

      <View style={{paddingHorizontal:"8%"}}>
        <Link href="/Perguntas" asChild>
          <Button title="Transporte de Produtos Perigosos - TPP" materiaEscolhida={"tpp"} />
        </Link>
        <Link href="/Perguntas" asChild>
          <Button title={"Transporte de Cargas Indivisíveis - TCI"} materiaEscolhida={"tci"} />
        </Link>
        <Link href="/Perguntas" asChild>
          <Button title={"Curso de Transporte de Passageiros - CTP"} materiaEscolhida={"ctp"} />
        </Link>
        <Link href="/Perguntas" asChild>
          <Button title={"Curso de Transporte Escolar - CTE"} materiaEscolhida={"cte"} />
        </Link>  
      </View>
      
    </View>
  );
};

export default Home;
