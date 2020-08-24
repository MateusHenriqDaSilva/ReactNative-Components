import React from "react"
import { Text } from "react-native"
import Estilo from "../estilo"

import Produtos from './Produtos'

export default (props) => {
    function obterlista() {
        return Produtos.map(p => {
            return (
                <Text key = {p.id}>{p.id}) {p.nome} tem preco R$ {p.preco}</Text>
            )
        })
    }
  return (
    <>
      <Text style={Estilo.textoGrande}>Lista de Produtos</Text>
      {obterlista()}
    </>
  )
}