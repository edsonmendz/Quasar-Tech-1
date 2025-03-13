import React, { forwardRef } from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

import estilos from "./botaocss";

// Tipagem das props do botão
// Tipagem das props do botão
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  materiaEscolhida?: string;
}

const Button = forwardRef<typeof TouchableOpacity, ButtonProps>((props, ref) => {
  const { title, onPress, style } = props; // Desestruturação correta

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, estilos.esperando, estilos.fonte1em]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
});

// Estilos do botão
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200EE", // Cor de fundo do botão
    paddingVertical: 12,         // Espaçamento vertical
    paddingHorizontal: 30,       // Espaçamento horizontal
    borderRadius: 5,            // Bordas arredondadas
    alignItems: "center",       // Alinha o texto no centro
    justifyContent: "center",   // Alinha o texto no centro
  },
  buttonText: {
    color: "#fff",              // Cor do texto
    fontSize: 16,               // Tamanho da fonte
    fontWeight: "bold",         // Peso da fonte
  }
});

export default Button;
