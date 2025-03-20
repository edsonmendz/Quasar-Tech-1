// types.ts
export type RootStackParamList = {
  Home: { maximoPerguntas: number }; // Para a tela Home, passando maximoPerguntas como parâmetro
  Perguntas: { nomeArquivo: string; maximoPerguntas: number }; // Para a tela Perguntas, passando nomeArquivo e maximoPerguntas
};