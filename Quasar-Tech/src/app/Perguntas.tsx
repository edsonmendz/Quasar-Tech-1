import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Pergunta from "./Pergunta";
import Finalizar from "./Finalizar";
import { useRoute } from "@react-navigation/native";
//import questoes from "./questoesTpp"

interface PerguntasProps {
    materiaEscolhida?: string;  // Tornando a prop opcional e do tipo string
    nomeArquivo?:string
  }    

  function Perguntas({ materiaEscolhida }: PerguntasProps) { 
    const route = useRoute();
    const { nomeArquivo } = route.params as { nomeArquivo: string };   

    const [questoes, SetQuestoes] = useState([]);  


    // Área de testes
       
    //


    // Contador da pergunta atual
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [perguntasSorteadas, setPerguntasSorteadas] = useState<number[]>([]);
    const [ordemRespostas, setOrdemRespostas] = useState<number[][]>([]);
    const [cartaoResposta, setCartaoResposta] = useState<number[]>([]);
    const [quantidadeAcertos, setQuantidadeAcertos] = useState(0); 
    const [finalizou, setFinalizou] = useState(false);
    const [conferirRespostas, setConferirRespostas] = useState(false);
    const maximoPerguntas = 10;

    

    // Alterar a pergunta atual
    function proximaPergunta() {
        setPerguntaAtual((perguntaAtual + 1) % maximoPerguntas);
    }

    function perguntaAnterior() {
        setPerguntaAtual((perguntaAtual - 1 + maximoPerguntas) % maximoPerguntas);
    }
    
    
    function randomizarPerguntas() {        
        const sorteadas: number[] = [];
        while (sorteadas.length < maximoPerguntas) {
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

        for (let i = 0; i < maximoPerguntas; i++) {
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
        for (let i = 0; i < maximoPerguntas; i++) {
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
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5"
    }
});
