import { StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

export const estilos = StyleSheet.create({
    altura10: {
        height: "14%",
    } as ViewStyle,
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
    } as ViewStyle,
    centralizarNormal: {
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
        borderColor: '#6200ee',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    esperandoAtivo: {
        backgroundColor: '#6200ee', // Efeito "clicado"
        color: 'white',
    } as ViewStyle,
    flexRow: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    fonte1em: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: '5%',
        marginHorizontal: '1%',
        fontWeight: 'bold'
    },
    fonte2em: {
        fontSize: 24,
        paddingVertical: 8,
        paddingHorizontal: '5%',
        marginHorizontal: '1%',
        fontWeight: 'bold'
    },
    largura100: {
        width: '100%',
    } as ViewStyle,
    largura90: {
        width: '90%'
    } as ViewStyle,
    largura50: {
        width: '50%',
    } as ViewStyle,
    largura45: {
        minWidthwidth: "45%",
    } as ViewStyle,
    largura25: {
        width: '26%',
    } as ViewStyle,
    margemVertical: {
        marginVertical: "1%",
    } as ViewStyle,
    margemEsquerda: {
        marginLeft: "45%"
    },
    monospace: {
        fontFamily: 'monospace'
    },
    padding5: {
        padding: '5%'
    } as ViewStyle,
    resposta: {
        backgroundColor: '#6200ee',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#6200ee',
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
    rodape: {
        position: 'absolute',
        left: "3%",
        right: "3%",
        bottom: "2%",
        justifyContent: 'center',
        alignItems: 'center',
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