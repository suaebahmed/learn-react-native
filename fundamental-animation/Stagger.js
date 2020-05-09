import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions, Animated, Easing} from 'react-native'

const { width,height} = Dimensions.get('window')

export default class Stagger extends Component {
    componentWillMount(){
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }
    componentDidMount(){
        Animated.stagger(300,[
            Animated.timing(this.animatedValue1,{
                toValue: height - 20,
                duration: 3000,
                // easing: Easing.bounce
            }),
            Animated.timing(this.animatedValue2,{
                toValue: height - 20,
                duration: 2000,
                // easing: Easing.bounce
            }),
            Animated.timing(this.animatedValue3,{
                toValue: height - 20,
                duration: 1000,
                easing: Easing.bounce
            })

        ]).start();
    }
    render() {
        return (
            <View style={{flex: 1,flexDirection: 'row'}}>
                    <Animated.View style={[styles.box,{height: this.animatedValue1}]} />
                    <Animated.View style={[styles.box,{height: this.animatedValue1}]} />
                    <Animated.View style={[styles.box,{height: this.animatedValue1}]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        width: width/3 - 15,
        margin: 5,
        backgroundColor: 'yellow',
        height: 120,
    }
})
