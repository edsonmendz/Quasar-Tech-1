import React from 'react';
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './componentes/botao';
import estilos from './componentes/botaocss';
import Donate from './donate';

interface FinalizarProps {
    Concluir: () => void;
    Conferir: () => void;
    conferirRespostas: boolean;
    finalizar: () => void;
    quantidadeAcertos: number;
    finalizou: boolean;
}

const Finalizar: React.FC<FinalizarProps> = ({ Concluir, Conferir, conferirRespostas, finalizar, quantidadeAcertos, finalizou }) => {
    const navigation = useNavigation(); // Para navegação no React Native
    const [donate, setDonate] = useState(1)
    
    let aleatorio = Math.floor(Math.random() * 4);
    if ( aleatorio == 0) {
        setDonate(aleatorio)
    }
    function DonateOff() {
        setDonate(1)
    }

    return (
        <View style={styles.container}>
            {!conferirRespostas ? (
                <View>
                    <Text>{aleatorio}</Text>
                    <Text style={[styles.textoPergunta, estilos.fonte2em]}>Tem certeza de que deseja finalizar o simulado?</Text>
                    <Button title="Concluir" onPress={Concluir} />
                    <Button title="Voltar" onPress={finalizar} />
                </View>
            ) : (
                <View>
                    {!donate ? (<Donate donateOff={DonateOff}></Donate>) :
                        (<View>
                            <Text style={[styles.resultado, estilos.fonte2em]}>
                                Você acertou: {quantidadeAcertos} pergunta{quantidadeAcertos !== 1 ? 's' : ''}
                            </Text>
                            <Button title="Conferir Respostas" onPress={Conferir} />
                            <TouchableOpacity >
                                <Button onPress={() => navigation.goBack()} title='Página inicial' />
                            </TouchableOpacity>
                        </View>)}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoPergunta: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    botao: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Finalizar;
