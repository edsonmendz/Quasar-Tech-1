import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botao from './componentes/botao';

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

    return (
        <View style={styles.container}>            
            {!conferirRespostas ? (
                <View>
                    <Text style={styles.textoPergunta}>Tem certeza de que deseja finalizar o simulado?</Text>
                    <Botao title="Concluir" onPress={Concluir} />
                    <Botao title="Voltar" onPress={finalizar} />
                </View>
            ) : (
                <View>
                    <Text style={styles.resultado}>
                        Você acertou: {quantidadeAcertos} pergunta{quantidadeAcertos !== 1 ? 's' : ''}
                    </Text>
                    <Botao title="Conferir Respostas" onPress={Conferir} />
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.botao}>
                        <Text style={styles.textoBotao}>Página Inicial</Text>
                    </TouchableOpacity>
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
