import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

function Input(props) {
    return (
        <TextInput 
        onChangeText={props.onChangeText}
        autoCapitalize="none"
        keyboardType={props.keyboardType}
        autoCorrect={false}
        value={props.enteredValue}
        style={styles.input}/>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 25,
        width: 40,
        textAlign: 'center',
        borderStyle: "solid",

        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    
    }
})

export default Input;
