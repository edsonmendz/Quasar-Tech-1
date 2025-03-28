import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

const Doacoes = () => {
  const chaveBitcoin = "bc1qmqv74vx5ww053dt7fv4csj70ffu8msq0m9a37n";

  const copiarParaClipboard = () => {
    Clipboard.setString(chaveBitcoin);
    alert("Chave copiada para o clipboard!");
  };

  return (
    <View>
      <Text>Gostou do aplicativo?</Text>
      <Text>Faça uma doação</Text>
      {/* Imagem do QR Code */}
      <Image
        source={require('./qrcodeBitcoin.png')}  // Caminho relativo para o arquivo da imagem
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 20 }} // Definindo tamanho e estilo da imagem
      />
      <TouchableOpacity onPress={copiarParaClipboard}>
        <Text>{chaveBitcoin}</Text>
        <Ionicons name="copy-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Doacoes;
