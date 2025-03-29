import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import estilos from './componentes/botaocss';

const Doacoes = () => {
  const chaveBitcoin = "bc1qmqv74vx5ww053dt7fv4csj70ffu8msq0m9a37n";

  // Função para dividir a chave em linhas de comprimento similar
  const splitTextIntoLines = (text: string, charsPerLine: number) => {
    const regex = new RegExp(`.{1,${charsPerLine}}`, 'g');
    return text.match(regex) || [];
  };

  const copiarParaClipboard = () => {
    Clipboard.setString(chaveBitcoin);
    alert("Chave copiada para o clipboard!");
  };

  return (
    <View style={estilos.centralizar}>
      <Text>Gostou do aplicativo?</Text>
      <Text>Faça uma doação</Text>
      {/* Imagem do QR Code */}
      <Image
        source={require('./qrcodeBitcoin.png')}  // Caminho relativo para o arquivo da imagem
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 20 }} // Definindo tamanho e estilo da imagem
      />
      <TouchableOpacity onPress={copiarParaClipboard}>
      <View style={estilos.chaveContainer}>
          {splitTextIntoLines(chaveBitcoin, 14).map((line, index) => (
            <Text key={index} style={estilos.chave}>{line}</Text>            
          ))}
          <Ionicons name="copy-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Doacoes;
