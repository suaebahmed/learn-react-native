import React,{useState} from 'react'
import Colors from '../constants/Color'
import {View,StyleSheet,Text} from 'react-native'


function NumberSelected(props) {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        margin: 10,

        borderStyle: "solid",
        borderColor: '#c717fc',
        borderWidth: 2,
        borderRadius: 5,
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    }
})
export default NumberSelected;
