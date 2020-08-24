import React from 'react'
import { Button } from 'react-native'

export default (props) => {
    function executar() {
        console.warn('Exec!!!! #01')
    }

    return (
        <React.Fragment>    
            <Button 
                title="Executar! #01" onPress={executar}/>
            <Button 
                title="Executar! #02" onPress={function() {
                    console.warn("exec 02!!!")
                }}/>
        </React.Fragment>
        )
}