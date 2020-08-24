import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => { 
    return (
        <React.Fragment>
            <Text style={Estilo.textoGrande}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </React.Fragment>
    )
}