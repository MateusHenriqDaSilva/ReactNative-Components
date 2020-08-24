import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'
import { useCallback } from 'react'

export default ({inicial = 0, passo = 1}) => {
    //let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo)
    }
    const dec = () => {
        setNumero(numero - passo)
    }

    return (
        <React.Fragment>
            <Text style={Estilo.textoGrande}>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </React.Fragment>
    )
}