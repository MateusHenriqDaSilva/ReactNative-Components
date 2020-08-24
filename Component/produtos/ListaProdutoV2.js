import React from "react"
import { Text, FlatList } from "react-native"
import Estilo from "../estilo"

import Produtos from './Produtos'

export default (props) => {
const produtoRender = ({ item: p }) => {
    return <Text key={p.id}>{p.id}) {p.nome} - R$ {p.preco} </Text>
} 
return (
    <>
      <Text style={Estilo.textoGrande}>Lista de Produtos v2</Text>
        <FlatList data={Produtos} keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
        />
    </>
  )
}