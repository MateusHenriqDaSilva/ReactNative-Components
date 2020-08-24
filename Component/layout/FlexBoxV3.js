import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
     return (
           <View style={style.FlexV3}>
                <Quadrado cor='#00F'   lado={20} />
                <Quadrado cor='yellow' lado={30} />
                <Quadrado cor='#F00'   lado={40} />
                <Quadrado cor='#0F0'   lado={50} />
           </View>
     )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})