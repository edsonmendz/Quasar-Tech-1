import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const estilos = StyleSheet.create({
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    chave: {
        fontSize: 16,
        fontFamily: 'monospace', // Mantém alinhamento uniforme entre caracteres
      },
    chaveContainer: {
        alignItems: 'center',
        marginBottom: 20,
      } as ViewStyle,
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
    largura100: {
        width: '100%',
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
    margemEsquerda: {
        marginLeft: "45%"
    },
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
    logo: {
        alignSelf: "center",
        marginTop: "-60%",
        flex: 1,
        width: "60%",
        resizeMode: "contain",        
    }
});

export default estilos;