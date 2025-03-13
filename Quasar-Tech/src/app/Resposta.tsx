import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import estilos from './componentes/botaocss'

interface RespostaProps {
    letra: String;
    resposta: string;
    responder: (respostaSelecionada: number) => void;
    num: number;
    cartaoResposta: number[];
    perguntaAtual: number;
    conferirRespostas: boolean;
    ordemRespostas: number[][];
}

function Resposta({ letra, resposta, responder, num, cartaoResposta, perguntaAtual, conferirRespostas, ordemRespostas }: RespostaProps) {    
    let classe = estilos.esperando;

    if (conferirRespostas) {
        if (ordemRespostas[perguntaAtual].indexOf(1) === num) {
            classe = estilos.respostaCerta;
        } else if (cartaoResposta[perguntaAtual] === num) {
            classe = estilos.respostaErrada;
        }
    } else if (cartaoResposta[perguntaAtual] === num) {
        classe = estilos.resposta;
    }

    return (                   
        <TouchableOpacity 
            onPress={() => responder(num)}
            style={[classe, estilos.largura100, estilos.margemVertical]}
        >   
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 5 }}>{letra}</Text>
                <Text>{resposta}</Text>
            </View>
        </TouchableOpacity>      
    );
}

export default Resposta;
