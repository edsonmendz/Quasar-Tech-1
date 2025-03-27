import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const estilos = StyleSheet.create({
    esperando: {
        backgroundColor: '#fff',
        color: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: 'skyblue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    esperandoAtivo: {
        backgroundColor: 'skyblue', // Efeito "clicado"
        color: 'white',
    } as ViewStyle,
    fonte1em: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: '1%',
    } as ViewStyle,
    altura15: {
        height: '15%',
    } as ViewStyle,
    larguraAuto: {
        width: 'auto'
    },
    largura100: {
        width: '100%',
    } as ViewStyle,
    largura96: {
        width: '96%',
    } as ViewStyle,
    largura50: {
        width: '50%',
    } as ViewStyle,
    largura25: {
        width: '26%',
    } as ViewStyle,
    margemVertical: {
        marginVertical: 8,
    } as ViewStyle,
    resposta: {
        backgroundColor: 'skyblue',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: 'skyblue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    respostaCerta: {
        backgroundColor: '#008000cc',
        borderColor: '#008000cc',
        color: 'white',
    } as ViewStyle,
    respostaErrada: {
        backgroundColor: 'salmon',
        borderColor: 'salmon',
        color: 'white',
    } as ViewStyle,
    fixedBottom: {
        marginTop: 0,
        width: 'auto',
        position: 'absolute', // Fixa a View em relação ao container pai
        bottom: 0,           // Posiciona no fundo da tela
        left: 0,             // Opcional: alinha à esquerda
        right: 0,            // Opcional: alinha à direita (ocupa toda a largura)
        backgroundColor: 'lightblue', // Apenas para visualizar
        padding: 10,         // Espaçamento interno
      },
});

export default estilos;