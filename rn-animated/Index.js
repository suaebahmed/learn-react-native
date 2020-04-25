import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native'
import { color } from 'react-native-reanimated';


export default class Index extends Component {
    constructor(props){
        super(props);
        this.animatedValue = new Animated.Value(0)
    }
    PressIn=()=>{
        Animated.spring(this.animatedValue,{

        })
    }
    PressOut=()=>{
        Animated.spring(this.animatedValue,{
            
        })
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                onPressIn={this.PressIn}
                onPressOut={this.PressOut}
                >
                    <View>
                        <Text>click me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const RADIUS = 80;
const BUTTON_HEIGHT = 15

const styles = StyleSheet.create({
    container: {
        
    },
    button: {
        width: 30,
        height: BUTTON_HEIGHT,
        borderRadius: BUTTON_HEIGHT/2,
        backgroundColor: '#333',
        color: 'white'
    }
});
