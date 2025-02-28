import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "../componentes/botao";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "expo-router";

const Home = () => {  

  // Renderiza a tela principal (Home) após o tempo de SplashScreen
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 35, marginBottom:30 }}>🏠 Escolha a matéria</Text>

      <View style={{paddingHorizontal:"8%"}}>
        <Button title={"Transporte de Produtos Perigosos - TPP"} />
        <Button title={"Transporte de Cargas Indivisíveis - TCI"} />
        <Button title={"Curso de Transporte de Passageiros - CTP"} />
        <Button title={"Curso de Transporte Escolar - CTE"} />
      </View>
      
    </View>
  );
};

export default Home;
