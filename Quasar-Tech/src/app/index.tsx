import { View, Text, Image } from "react-native"

import { estilos } from "./loadingcss"

export default function Index() {
    return(
        <View ><Image style={estilos.logo} source={require('./quasar.png')}></Image></View>
    )
}