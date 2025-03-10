import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./loading"; // Componente de Loading ou SplashScreen

import Home from "./home";
import Curso from "./componentes/curso";

const Stack = createStackNavigator();

const App = () => {

  const [showLoading, setShowLoading] = useState(true); // Controla a exibição da SplashScreen

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Curso" component={Curso} />
      </Stack.Navigator>    
  );
};

export default App;