import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Easing } from 'react-native'

export default class Sequence extends Component {
    componentWillMount(){
        this.animatedValue1 = new Animated.Value(0.5);
        this.animatedValue2 = new Animated.Value(0);
    }
    componentDidMount(){
        Animated.sequence([
            Animated.spring(this.animatedValue1,{
                toValue: 1.1
            }),
            Animated.timing(this.animatedValue2,{
                toValue: 400,
                duration: 5000,
                easing: Easing.bounce,
                useNativeDriver: false,
                //--this animation will be fired on JS thread.
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
        const animatedStyle = {
            transform : [
                {translateY: this.animatedValue2},
                {scale: this.animatedValue1}
            ]
        }
        return (
            <View style={{flex: 1,alignItems: 'center'}}>
                <Animated.View style={[styles.box,animatedStyle]} />
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'yellow',
        width: 120,
        height: 100,
        borderRadius: 10,
    }
})
