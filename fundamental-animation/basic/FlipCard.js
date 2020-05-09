import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Button } from 'react-native'

export default class FlipCard extends Component {
    componentWillMount(){
        this.animatedValue = new Animated.Value(0);
        this.value = new Animated.Value(0);
        this.animatedValue.addListener(({value})=>{
            this.value = value;
            // console.log(value,'valie')
        })
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0,180],
            outputRange: [`0deg`,`180deg`]
        })
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0,180],
            outputRange: [`0deg`,`360deg`]
        })
    }
    clipHandle=()=>{
        if(this.value > 0){
            Animated.spring(this.animatedValue,{
                toValue: 0,
                tension: 10,
                friction: 5
            }).start();

        }else{
            Animated.spring(this.animatedValue,{
                toValue: 180,
                tension: 6,
                friction: 7
            }).start();
        }
    }
    render() {
        const animateStyle1 = {
            transform: [{rotateY: this.frontInterpolate}]
        }
        const animateStyle2 = {
            transform: [{rotateY: this.backInterpolate}]
        }
        return (
            <View style={styles.container}>
                {/* <View> */}

                    <Animated.View style={[styles.flipBox,animateStyle2]}>
                    <Text style={styles.text}>this back side clip card text</Text>
                    </Animated.View>

                    <Animated.View style={[styles.flipBox,styles.flipAb,animateStyle1]}>
                        <Text style={styles.text}>this front side clip card text</Text>
                    </Animated.View>

                    <Button onPress={this.clipHandle} title="animate"></Button>
                {/* </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flipBox: {
        width: 120,
        height: 120,
        backgroundColor: 'red',
        borderRadius: 5,
        margin: 20,
        // backfaceVisibility: 'hidden'
    },
    flipAb:{
        // position: 'absolute',
        // top: 0,
    },
    text:{
        fontSize: 26,
        textAlign: 'center',
        color: 'white'
    }
})
