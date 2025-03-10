import React, { forwardRef } from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";

import estilos from "./botaocss";

// Tipagem das props do botão
interface ButtonProps {
  title: string; // Texto a ser exibido no botão
  onPress?: () => void; // Agora é opcional
  style?: object; // Estilo adicional que pode ser passado (opcional)
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ styles.button, estilos.botaoNormal,  style]}>
      <Text style={estilos.textoNormal}>{title}</Text>
    </TouchableOpacity>
  );
};

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
