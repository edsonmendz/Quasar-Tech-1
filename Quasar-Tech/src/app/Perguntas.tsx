import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import questoes from './questoesTpp';
import Pergunta from "./Pergunta";
import Finalizar from "./Finalizar";
import { useRoute } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router"; // Certifique-se de importar corretamente

interface PerguntasProps {
    materiaEscolhida?: string;  // Tornando a prop opcional e do tipo string
  }

  

  function Perguntas({ materiaEscolhida }: PerguntasProps) {

    const { materia } = useLocalSearchParams();
    const [questoes, setQuestoes] = useState<any[]>([]);
    console.log(materia)
    useEffect(() => {
        if (!materia) return;
    
        const carregarQuestoes = async () => {
          try {
            let modulo: { default: any[] };
            console.log(materia)
    
            switch (materia) {
              case "Tpp":
                modulo = await import("./questoesTpp");
                break;
              case "Tci":
                modulo = await import("./questoesTci");
                break;
              case "Ctp":
                modulo = await import("./questoesTpp");
                break;
              case "Cte":
                modulo = await import("./questoesTpp");
                break;
              default:
                modulo = { default: [] };
                break;
            }
    
            setQuestoes(modulo.default);
          } catch (error) {
            console.error("Erro ao carregar questões:", error);
            setQuestoes([]); // Se houver erro, define como lista vazia
          }
        };
    
        carregarQuestoes();
      }, [materia]);
    
    

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
    
    // Sortear perguntas
    useEffect(() => {
        setPerguntasSorteadas(randomizarPerguntas());
    }, []);

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
