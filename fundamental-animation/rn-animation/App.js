import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Lession1 from './Lession1'
import KittenCard from './KittenCard'

const App = () => {
    return (
        <View style={{flex: 1}}>
            {/* <Lession1/> */}
            <KittenCard/>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({});
