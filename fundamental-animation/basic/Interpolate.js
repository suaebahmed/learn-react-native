import React, { Component } from 'react'
import { Text, StyleSheet, View ,Animated} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
// import Animated, { Value, Extrapolate } from 'react-native-reanimated'

export default class InterpolateApp extends Component {

    componentWillMount(){
       this.animatedValue = new Animated.Value(0);
       this.animatedValue2 = new Animated.Value(0)
    }
    componentDidMount(){
        Animated.timing(this.animatedValue,{
            toValue: 1,
            duration: 5000,
        }).start();

        Animated.timing(this.animatedValue2,{
            toValue: 2,
            duration: 6000,
            delay: 1000,
        }).start();
    }

    render() {
        const interPolateColor = this.animatedValue.interpolate({
            inputRange: [0,1],
            outputRange: [`rgb(60,00,120)`,`rgb(222,20,200)`],
            extrapolate: 'clamp'
        })
        const interPolateRotate = this.animatedValue2.interpolate({
            inputRange: [0,1,1,2],
            outputRange: [`0deg`, `360deg`,`-0deg`, `-360deg`],
            extrapolate: 'clamp'
        })
        
        return (
            <View>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform : [{rotate: interPolateRotate}],
                            backgroundColor: interPolateColor,
                        }
                    ]}
                >

                </Animated.View>
                <ScrollView
                >

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: 'rgb(255,255,255)',
        height: 100,
        width: 100,
        borderRadius: 5,
        
    }
})
