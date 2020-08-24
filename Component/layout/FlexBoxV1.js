import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
     return (
           <View style={style.FlexV1}>
                <Quadrado cor='#00F' />
                <Quadrado cor='#F00'/>
                <Quadrado cor='#0F0'/>
           </View>
     )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: '#000'
    }
})