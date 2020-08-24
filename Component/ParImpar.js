import React from "react";
import { Text, View } from "react-native";
import Estilo from "./estilo";
import estilo from "./estilo";

export default ({ num = 0 }) => {
    return (
      <View>
        <Text style={Estilo.textoGrande}>O resultado é: </Text>
        {
            num % 2 === 0
                ? <Text style ={estilo.textoGrande}>Par</Text>
                : <Text style ={estilo.textoGrande}>Impar</Text>
        } 
      </View>
    )
  }
