import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, PanResponder } from 'react-native'

export default class Part3 extends Component {
    componentWillMount(){
        this.animatedValue = new Animated.Value(0);


        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt,gesture)=>true,
            onMoveShouldSetPanResponder:  (evt,gesture)=>true,

            onPanResponderGrant:  (evt,gesture)=>{

            },
            onPanResponderMove:  (evt,gesture)=>{

            },
            onPanResponderRelease: (e, gestureState)=>{
                
            }
        })
    }
    componentDidMount(){

    }
    render() {
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})
