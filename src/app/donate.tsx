import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from './componentes/botao';
import { useNavigation } from '@react-navigation/native';
import estilos from './componentes/botaocss';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { useState, useEffect } from 'react';

interface DonateProps {
    donateOff: () => void;
}

const Donate: React.FC<DonateProps> = ({ donateOff }) => {
    const chaveBitcoin = "bc1qmqv74vx5ww053dt7fv4csj70ffu8msq0m9a37n";
    const chavePix = "5459517@vakinha.com.br"
    const navigation = useNavigation(); // Para navegação no React Native
    const [contador, setContador] = useState(0)
    let conteudo


    //COPIAR PARA CLIPBOARD
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

    // CONTADOR: 

    useEffect(() => {
        setTimeout(() => {
            setContador(contador + 0.1)
        }, 100);
    }, [contador])

    if (contador < 1.8) {
        conteudo = <View><Text style={estilos.fonte2em}>Gostou deste aplicativo?</Text></View>
    } else if (contador < 5) {
        conteudo = <View><Text style={estilos.fonte2em}>Faça uma doação para incentivar cada vez mais atualizações</Text></View>
    } else if (contador >= 5) {
        conteudo = <View>
            <View>
                <TouchableOpacity style={estilos.centralizar} onPress={() => copiarParaClipboard(chavePix)}>
                    <Text style={estilos.fonte2em}>Doe pela chave Pix:</Text>
                    <Text>{chavePix}</Text>
                </TouchableOpacity>
            </View>

            <Text></Text>
            <View>
                <TouchableOpacity style={estilos.centralizar} onPress={() => copiarParaClipboard(chaveBitcoin)} >
                    <Text style={estilos.fonte2em}>Doe bitcoin:</Text>
                    <Text>{chaveBitcoin}</Text>
                </TouchableOpacity>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            {contador < 8.6 ? <TouchableOpacity>
                <Text style={[estilos.button, estilos.buttonText, estilos.respostaErradaNormal]}>Espere alguns segundos...</Text>
            </TouchableOpacity> : <TouchableOpacity onPress={donateOff}>
                <Text style={[estilos.button, estilos.buttonText]}>Conferir Acertos</Text>
            </TouchableOpacity>}

        </View>
    }

    return (
        <View style={estilos.centralizar}>
            <View style={estilos.margemTop60}>
                {conteudo}
                </View>
            <View style={estilos.margemTop90}>
                <Toast></Toast>
            </View>
        </View>
    )
}

export default Donate;