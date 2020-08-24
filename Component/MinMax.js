import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.textoGrande}>
            O valor {props.max} e maior que o valor {props.min}
        </Text>
    )
}