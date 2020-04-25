import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Header(props){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f7287b',
        padding: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: 'rgb(234, 219, 219)'
    }
})

export default Header;
