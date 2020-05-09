import React from 'react'
import { StyleSheet, Text, View, StatusBar,TouchableOpacity, ScrollView } from 'react-native'
import BackgroundHeader from  './components/BackgroundHeader'
import BottonTab from './components/BottomTab'
import HomeScreen from './HomeScreen'

const App = () => {
    return (
        <>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.container}>

            <BackgroundHeader style={styles.bg}/>
            <ScrollView style={styles.container}>
                <HomeScreen/>
            </ScrollView>

            <BottonTab/>
        </View>
        </>
    )
}
export default App;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bg:{
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 1
    }
})
