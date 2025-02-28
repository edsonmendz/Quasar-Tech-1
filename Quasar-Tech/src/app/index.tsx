import React, { useRef, useEffect } from "react";
import { View, Image, Animated } from "react-native";
import { estilos } from "./loadingcss"; // Importa o estilo

export default function Index() {
    const rotateValue = new Animated.Value(0); // Para rotação
  const opacityValue = new Animated.Value(0); // Para opacidade

    useEffect(() => {
        // Inicia as animações
        Animated.loop(
          Animated.parallel([
            // Animação de rotação
            Animated.timing(rotateValue, {
              toValue: -2,
              duration: 30000, // 3 segundos para uma rotação completa
              useNativeDriver: true, // Habilita o uso do driver nativo para performance
            }),
            // Animação de fade in (transição de opacidade)
            Animated.timing(opacityValue, {
              toValue: 1,
              duration: 7000, // Fade in gradual durante a rotação
              useNativeDriver: true, // Habilita o uso do driver nativo
            })
          ])
        ).start(); // Inicia a animação em loop
      }, []);
    
      // Interpolando valores
      const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'], // Rotaciona de 0 a 360 graus
      });

    // Converte o valor da animação em graus
    const rotation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (        
            <Animated.Image
                style={[estilos.logo, { transform: [{ rotate: rotation }], opacity: opacityValue }]}
                source={require("./quasar.png")}
            />        
    );
}
