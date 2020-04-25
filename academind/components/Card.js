import React from 'react'
import { View, StyleSheet } from 'react-native'

function Card(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderRadius: 5,
        shadowOffset: { width: 2, height: 2},
        shadowColor: 'grey',                            
        shadowOpacity: 0.5,
        shadowRadius: 10,

        // borderColor: 'grey',
        // borderWidth: 1,
        // borderStyle: 'solid',
        
    }
})

export default Card
