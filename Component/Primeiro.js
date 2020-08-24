import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default () => {
    console.log('Opa!')
    return (
        <Text style={estilo.textoGrande}>Primeiro</Text>
    )
}