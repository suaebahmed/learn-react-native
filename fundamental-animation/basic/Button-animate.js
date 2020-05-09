import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Animated } from 'react-native'
import InterpolateApp from './Interpolate'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ButtonApp extends Component {
    componentWillMount(){
        this.animatedValue = new Animated.Value(1)
    }
    pressInHandle = ()=>{
        Animated.spring(this.animatedValue,{
            toValue: 0.6
        }).start();
    }
    pressOutHandle=()=>{
        Animated.spring(this.animatedValue,{
            toValue: 1,
            tension: 55,
            friction: 2
        }).start();
    }
    render() {
        return (
            <View>
                <InterpolateApp/>
                    <TouchableOpacity
                        onPressIn={this.pressInHandle}
                        onPressOut={this.pressOutHandle}
                    >
                        <Animated.View
                            style={[{
                                width: 80,
                                height: 30,
                                backgroundColor: '#333',
                                margin: 40,
                                borderRadius: 30/2,
                            },
                            { transform: [{scale: this.animatedValue}] }
                        ]}
                        >
                            <Text style={{textAlign: 'center',color: 'white'}}>Click me!</Text>
                        </Animated.View>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
