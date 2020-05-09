import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

function Input(props) {
    return (
        <TextInput 
        // onChangeText={props.onChangeText}
        // value={props.enteredValue}
        // keyboardType={props.keyboardType}

        {...props}  /// instead doing marny you can Once!;
        autoCapitalize="none"
        autoCorrect={false}
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
