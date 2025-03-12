import { StyleSheet } from 'react-native';

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
    },
    esperandoAtivo: {
        backgroundColor: 'skyblue', // Efeito "clicado"
        color: 'white',
    },
    fonte1em: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: '1%',
    },
    largura100: {
        width: '100%',
    },
    largura50: {
        width: '50%',
    },
    largura25: {
        width: '26%',
    },
    margemVertical: {
        marginVertical: 8,
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
    },
    respostaCerta: {
        backgroundColor: '#008000cc',
        borderColor: '#008000cc',
        color: 'white',
    },
    respostaErrada: {
        backgroundColor: 'salmon',
        borderColor: 'salmon',
        color: 'white',
    },
});

export default estilos;