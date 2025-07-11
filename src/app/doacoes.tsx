import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import estilos from './componentes/botaocss';
import Toast from 'react-native-toast-message';

const Doacoes = () => {
  const chaveBitcoin = "bc1qmqv74vx5ww053dt7fv4csj70ffu8msq0m9a37n";
  const chavePix = "5459517@vakinha.com.br"

  // Função para dividir a chave em linhas de comprimento similar
  const splitTextIntoLines = (text: string, charsPerLine: number) => {
    const regex = new RegExp(`.{1,${charsPerLine}}`, 'g');
    return text.match(regex) || [];
  };

  const copiarParaClipboard = (chave: string) => {
    Clipboard.setString(chave);

    // Mostra a notificação Toast
    Toast.show({
      type: 'success', // Tipos comuns: 'success', 'error', 'info'
      text1: 'Sucesso!',
      text2: 'Chave copiada!',
      position: 'bottom', // Posição do Toast na tela
      visibilityTime: 2000, // Duração em milissegundos
    });

  };

  return (
    <View style={estilos.centralizar}>
      <Text>Gostou do aplicativo?</Text>
      <Text>Faça uma doação:</Text>
      <TouchableOpacity onPress={() => copiarParaClipboard(chavePix)}>
        <Text>Minha Chave PIX: 5459517@vakinha.com.br</Text>
      </TouchableOpacity>
      {/* Imagem do QR Code */}
      <Image
        source={require('./qrcodeBitcoin.png')}  // Caminho relativo para o arquivo da imagem
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 20 }} // Definindo tamanho e estilo da imagem
      />
      <TouchableOpacity onPress={() => copiarParaClipboard(chaveBitcoin)}>
        <View style={estilos.chaveContainer}>
          {splitTextIntoLines(chaveBitcoin, 14).map((line, index) => (
            <Text key={index} style={estilos.chave}>{line}</Text>
          ))}
          <Ionicons name="copy-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View style={estilos.margemEsquerda}>
        <Toast />
      </View>
    </View>
  );
};

export default Doacoes;
