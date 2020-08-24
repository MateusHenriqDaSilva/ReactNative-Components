import React, { useState } from "react"
import Filho from "./Filho"
import { Text } from "react-native"
import Estilo from "../estilo"

export default (props) => {
  const [texto, setTexto] = useState("")
  const [num, setNum] = useState("")

  function exibirValor(numero, texto) {
    setNum(numero)
    setTexto(texto)
  }
  return (
    <>
      <Text style={Estilo.textoGrande}>{texto}{num}</Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
