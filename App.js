import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

//import Familia from "./Component/relacao/Familia"
//import Membro from "./Component/relacao/Membro"

//import ListaProdutos from './Component/produtos/ListaProduto'
//import ListaProdutosv2 from './Component/produtos/ListaProdutoV2'
//import ContadorV2 from './Component/contador/ContadorV2'
//import Comp1, { Comp2, Comp3 } from './Component/Mult'
//import MinMax from './Component/MinMax'
//import Aleatorio from './Component/Aleatorio'
//import Titulo from './Component/Titulo'
//import Botao from './Component/Botao'
//import Contador from './Component/Contador'
//import Pai from './Component/indireta/Pai'
//import Diferenciar from './Component/Diferenciar'
//import ParImpar from './Component/ParImpar'
//import UsuarioLogado from './Component/UsuarioLogado'
//import DigiteSeuNome from './Component/DigiteSeuNome'
//import FlexBoxV1 from './Component/layout/FlexBoxV1'
//import FlexBoxV2 from './Component/layout/FlexBoxV2'
//import FlexBoxV3 from './Component/layout/FlexBoxV3'
//import FlexBoxV4 from './Component/layout/FlexBoxV4'
//import Mega from './Component/mega/Mega'
import Fetch from './Component/Fetch/Fetch'

export default () => (
  <SafeAreaView style={styles.App}>
    <Fetch />
    {/*<Botao />
    <Mega qtdeNumeros={7}/>
    <FlexBoxV4 />
    <FlexBoxV3 />
    <FlexBoxV2 />
    <FlexBoxV1 />
    <DigiteSeuNome />
    <ListaProdutosv2 />
    <ListaProdutos />
    <UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@hotmail.com'}}/>
    <Familia>
      <Membro nome="Mateus" sobrenome="Silva"/>
      <Membro nome="Denis" sobrenome="Silva"/>
    </Familia>
    <Familia>
      <Membro nome="Leliane" sobrenome="Silva"/>
      <Membro nome="Mateus" sobrenome="Silva"/>
    </Familia>
      <ParImpar num={3}/>
      <Diferenciar />
      <ContadorV2/>
      <Pai/>
      <Pai />
      <Contador inicial={100} passo={10}/>
      <Contador />
      <Titulo principal="Cadastro de Produto" segundario="Tela de Cadastro do Produto"/>
      <Aleatorio min={5} max={10}></Aleatorio>
      <MinMax min={1} max={3}></MinMax>
      <Comp1></Comp1>
      <Comp2 />
      <Comp3 />
      <Primeiro />*/}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  App: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
})
