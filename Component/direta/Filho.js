import React from "react";
import { Text } from "react-native";
import Estilo from "../estilo";

export default (props) => {
  return (
    <>
      <Text style={Estilo.textoGrande}>{props.a}</Text>
      <Text style={Estilo.textoGrande}>{props.b}</Text>
    </>
  );
};
