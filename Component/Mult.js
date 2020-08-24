import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function Comp1() {
    return <Text style={Estilo.textoGrande}>Comp 01 #Oficial</Text>

}

export function Comp2() {
    return <Text style={Estilo.textoGrande}>Comp 02</Text>

}

export function Comp3() {
    return <Text style={Estilo.textoGrande}>Comp 03</Text>
}