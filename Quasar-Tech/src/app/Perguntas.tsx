import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Pergunta from "./Pergunta";
import Finalizar from "./Finalizar";
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../rotas/types';
import * as amplitude from '@amplitude/analytics-react-native'; // Amplitude, tomara que funcione

type PerguntasRouteProp = RouteProp<RootStackParamList, 'Perguntas'>;

  const Perguntas: React.FC = () => {
    const route = useRoute<PerguntasRouteProp>();
    const { nomeArquivo, maximoPerguntas } = route.params; // Obtendo o maximoPerguntas
    const perguntasMax = maximoPerguntas !== undefined ? maximoPerguntas : 10;  // Define 10 como valor padrão

       

    // Contador da pergunta atual
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [perguntasSorteadas, setPerguntasSorteadas] = useState<number[]>([]);
    const [ordemRespostas, setOrdemRespostas] = useState<number[][]>([]);
    const [cartaoResposta, setCartaoResposta] = useState<number[]>([]);
    const [quantidadeAcertos, setQuantidadeAcertos] = useState(0); 
    const [finalizou, setFinalizou] = useState(false);
    const [conferirRespostas, setConferirRespostas] = useState(false);
    const [questoes, SetQuestoes] = useState([]);
    


    // Alterar a pergunta atual
    function proximaPergunta() {
        setPerguntaAtual((perguntaAtual + 1) % perguntasMax);
    }    

    function perguntaAnterior() {
        if(perguntaAtual < 1) {
            setPerguntaAtual(perguntasMax -1);
        }else{
            setPerguntaAtual(perguntaAtual -1);
        }
    }
    
    
    function randomizarPerguntas() {        
        const sorteadas: number[] = [];
        while (sorteadas.length < perguntasMax) {
            const numeroAleatorio = Math.floor(Math.random() * questoes.length);
            if (!sorteadas.includes(numeroAleatorio)) {
                sorteadas.push(numeroAleatorio);
            }
        }
        return sorteadas;
    }

    // Sortear perguntas
    useEffect(() => {              
        if (!nomeArquivo) return; // Evita execução desnecessária caso a prop esteja vazia
        let dados;
        amplitude.init('bba4fc780cfe4d4ec23cc86d0a1e6f5c');
        amplitude.track(`${nomeArquivo} Aberto`);
        switch (nomeArquivo) {
            case "Tpp":
                dados = require('./questoesTpp').default;                
                break;
            case "Tci":
                dados = require('./questoesTci').default;
                break;
            case "Ctp":
                dados = require('./questoesCtp').default;                
                break;
            case "Cte":
                dados = require('./questoesCte').default;
                break;
            case "Socorrista":
                dados = require('./questoesSocorrista').default;
                break;
            case "BombeiroCivil":
                dados = require('./questoesBombeiroCivil').default;
                break;
            case "AcessoPorCordas":
                dados = require('./questoesAcessoPorCordas').default;
            break;
            case "OficialDeJustica":
                dados = require('./questoesOficialDeJustica').default;
            break;
            case "SegurancaDoTrabalho":
                dados = require('./questoesSegurancaDoTrabalho').default;
            break;
            case "AproximaçãoEBalizamentoDeAeronaves":
                dados = require('./questoesAproximaçãoEBalizamentoDeAeronaves').default;
            break;
            case "LGPD":
                dados = require('./questoesLeiGeralDeProteçãoDeDados').default;
            break;
            case "Enfermagem":
                dados = require('./questoesEnfermagem').default;
            break;
            case "Glasgow":
                dados = require('./questoesGlasgow').default;
            break;
            case "Administracao":
                dados = require('./questoesAdministracao').default;
            break;
            case "InstrutorDeTransito":
                dados = require('./questoesInstrutorDeTransito').default;
            break;
            case "DesenvolvimentodeSoftwareSeguro":
                dados = require('./questoesDesenvolvimentodeSoftwareSeguro').default;
            break;
            case "emergencia":
                dados = require('./questoesEmergencia').default;
            break;
            default:
                console.warn("Arquivo de questões não encontrado para:", nomeArquivo);
            return;
        }
        SetQuestoes(dados);
    }, [nomeArquivo]);

    useEffect(() => {
        if (questoes.length > 0) { // Garante que só roda quando 'questoes' foi realmente atualizado
            setPerguntasSorteadas(randomizarPerguntas());
        }
    }, [questoes]); // Executa quando 'questoes' for atualizado

    // Exibir a pergunta atual
    const perguntaAtualSorteada = perguntasSorteadas.length > 0 ? perguntasSorteadas[perguntaAtual] : null;
    const questao = perguntaAtualSorteada !== null ? questoes[perguntaAtualSorteada] : null;

    // Armazenar Ordem das Respostas
    useEffect(() => {
        gerarOrdemRespostas();
    }, []);
    
    function gerarOrdemRespostas() {
        const novaOrdem: number[][] = [];
        const maximoRespostas = 4;

        for (let i = 0; i < perguntasMax; i++) {
            const resposta: number[] = [];
            while (resposta.length < maximoRespostas) {
                const numeroAleatorio = Math.floor(Math.random() * maximoRespostas + 1);
                if (!resposta.includes(numeroAleatorio)) {
                    resposta.push(numeroAleatorio);
                }
            }
            novaOrdem.push(resposta);
        }

        setOrdemRespostas(novaOrdem);
    }

    // Cartão resposta
    function responder(respostaSelecionada: number) {        
        if (!conferirRespostas) {
            const novoCartaoResposta = [...cartaoResposta];
            novoCartaoResposta[perguntaAtual] = respostaSelecionada;
            setCartaoResposta(novoCartaoResposta);
        }
    }

    // Encerrando o simulado
    function finalizar() {
        let contador = 0;
        for (let i = 0; i < perguntasMax; i++) {
            if (ordemRespostas[i].indexOf(1) === cartaoResposta[i]) { 
                contador++;
            }
        }
        setQuantidadeAcertos(contador);
        setFinalizou(!finalizou);
    }

    // Manipulando conferência
    function Concluir() {        
        setConferirRespostas(true);
    }

    function Conferir() {
        setFinalizou(false);
    }


    // Front-end
    return (
        <View style={styles.container}>
            {questao && !finalizou && (
                <Pergunta 
                    perguntaAnterior={perguntaAnterior}
                    proximaPergunta={proximaPergunta}
                    finalizar={finalizar}
                    conferirRespostas={conferirRespostas}
                    cartaoResposta={cartaoResposta}
                    perguntaAtual={perguntaAtual} 
                    pergunta={questao} 
                    resposta={ordemRespostas[perguntaAtual]}
                    responder={responder}
                    ordemRespostas={ordemRespostas}
                />
            )}

            {finalizou && (
                <Finalizar
                    conferirRespostas={conferirRespostas}
                    Concluir={Concluir}
                    Conferir={Conferir}
                    quantidadeAcertos={quantidadeAcertos}
                    finalizar={finalizar}
                    finalizou={finalizou}
                />  
            )}
        </View>
    );
}

export default Perguntas;

// Estilos para React Native
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
