import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
const menus = ["home","search1","hearto","calendar","user"]

const BottomTab = () => {
    return (
        <View style={{
            // display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#FFFFFF',
            padding: 10,
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            {menus.map((icon,index)=>
                <TouchableOpacity key={index}>
                    <AntDesign  name={icon} size={30} />
                </TouchableOpacity>)}
        </View>
    )
}

export default BottomTab;

const styles = StyleSheet.create({})
