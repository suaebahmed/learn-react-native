import React, { Component } from 'react'
import { Text, StyleSheet, View,Animated } from 'react-native'

export default class Parallel extends Component {
    componentWillMount(){
        this.animatedValue1 = new Animated.Value(0.5);
        this.animatedValue2 = new Animated.Value(0);
    }
    componentDidMount(){
        Animated.parallel([
            Animated.spring(this.animatedValue1,{
                toValue: 1.1
            }),
            Animated.timing(this.animatedValue2,{
                toValue: 400,
                duration: 5000,
                easing: Easing.bounce
            }),
            Animated.timing(this.animatedValue2,{
                toValue: 0,
                duration: 5000,
                easing: Easing.bounce
            }),
            Animated.spring(this.animatedValue1,{
                toValue: 0.5
            })
        ]).start()
    }
    render() {
        return (
            <View>
                <Animated.View style={} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'red',
    }
})