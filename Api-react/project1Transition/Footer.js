import React from 'react'
import { View,Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Footer({TextHandle,handler}) {
    return (
       
        <TouchableOpacity style={{
            height: 30,
            borderColor: '#333',
            borderWidth: 1

        }} 
        onPress={handler}
        >
            <Text style={{textAlign: 'center'}}>{TextHandle}</Text>
        </TouchableOpacity>
    )
}

export default Footer;
