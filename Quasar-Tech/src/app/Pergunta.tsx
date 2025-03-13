import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Resposta from './Resposta';
import Button from './componentes/botao';

interface PerguntaProps {
    perguntaAtual: number;         // Índice da pergunta atual (assumindo que é um número)
    perguntaAnterior: () => void;  // Função que retorna void
    proximaPergunta: () => void;   // Função que retorna void
    finalizar: () => void;         // Função que retorna void
    pergunta: number[];              // Texto da pergunta
    resposta: number[];            // Array de strings contendo as respostas possíveis
    responder: boolean; // Função que recebe um número e retorna void
    cartaoResposta: number[];      // Array de números representando respostas dadas
    conferirRespostas: boolean;    // Indica se está no modo de conferir respostas
    ordemRespostas: number[][];    // Matriz para armazenar a ordem das respostas
}

function Pergunta({ 
    perguntaAtual, 
    perguntaAnterior, 
    proximaPergunta, 
    finalizar, 
    pergunta, 
    resposta, 
    responder, 
    cartaoResposta, 
    conferirRespostas, 
    ordemRespostas 
}: PerguntaProps)

{     

    return (
        <View style={styles.container}>
            <Text style={styles.pergunta}>
                <Text style={styles.perguntaNumero}>{perguntaAtual + 1} </Text>
                {pergunta[0]}
            </Text>

            <View>
                <Resposta 
                    letra="A" resposta={pergunta[resposta[0]]} responder={responder} num={0} 
                    cartaoResposta={cartaoResposta} perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas} ordemRespostas={ordemRespostas} 
                />
                <Resposta 
                    letra="B" resposta={pergunta[resposta[1]]} responder={responder} num={1} 
                    cartaoResposta={cartaoResposta} perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas} ordemRespostas={ordemRespostas} 
                />
                <Resposta 
                    letra="C" resposta={pergunta[resposta[2]]} responder={responder} num={2} 
                    cartaoResposta={cartaoResposta} perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas} ordemRespostas={ordemRespostas} 
                />
                <Resposta 
                    letra="D" resposta={pergunta[resposta[3]]} responder={responder} num={3} 
                    cartaoResposta={cartaoResposta} perguntaAtual={perguntaAtual}
                    conferirRespostas={conferirRespostas} ordemRespostas={ordemRespostas} 
                />
            </View>

            <View style={styles.botoesContainer}>
                <Button title="Voltar" onPress={perguntaAnterior} />
                <Button title="Encerrar" onPress={finalizar} />
                <Button title="Próximo" onPress={proximaPergunta} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        flex: 1,
    },
    pergunta: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    perguntaNumero: {
        fontWeight: 'bold',
        color: 'blue',
    },
    botoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});

export default Pergunta;
