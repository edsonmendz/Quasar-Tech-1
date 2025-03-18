import { View, Text } from "react-native";
import Button from "./componentes/botao";
import { Link, Route } from "expo-router";

const Home = () => {  

  // Renderiza a tela principal (Home) após o tempo de SplashScreen
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>      

      <View style={{paddingHorizontal:"8%"}}>
        <Link href={{ pathname: "/Perguntas", params: { nomeArquivo: "Tpp" } }}  asChild>
          <Button title="Transporte de Produtos Perigosos - TPP" />
        </Link>
        <Link href={{ pathname: "/Perguntas", params: { nomeArquivo: "Tci" }  }} asChild>
          <Button title={"Transporte de Cargas Indivisíveis - TCI"} />
        </Link>
        <Link href={{ pathname: "/Perguntas", params: { nomeArquivo: "Ctp" } }} asChild>
          <Button title={"Curso de Transporte de Passageiros - CTP"} />
        </Link>
        <Link href={{ pathname: "/Perguntas", params: { nomeArquivo: "Cte" } }} asChild>
          <Button title={"Curso de Transporte Escolar - CTE"} />
        </Link>
        <Link href={{ pathname: "/Perguntas", params: { nomeArquivo: "Socorrista" } }} asChild>
          <Button title={"Socorrista"} />
        </Link> 
      </View>
      
    </View>
  );
};

export default Home;
