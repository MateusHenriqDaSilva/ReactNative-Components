import React from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumeros from './MegaNumero' 
export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQuatidadeNumero = (quantidade) => {
        this.setState({
            qtdeNumeros: +quantidade
        })
    }

    gerarNumeroNaoContido = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumero = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumeros key={num} num={num}/>
        })
    }

    render(){
        return (
            <>
                <Text style={Estilo.textoGrande}>
                    Gerador de Mega-Sena

                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de numeros"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQuatidadeNumero}
                />
                <Button title='Gerar' onPress={this.gerarNumero} />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}