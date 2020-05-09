import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
// import FlipCard from './FlipCard'
import Sequence from '../Sequence'
import Stagger from '../Stagger'

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                {/* <FlipCard/> */}
                {/* <Sequence/> */}
                <Stagger/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
