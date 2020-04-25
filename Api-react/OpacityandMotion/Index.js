import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
import Animated, { Clock,Easing,cond,eq,neq,and,event,interpolate,Extrapolate,
    Value,block, startClock, timing, stopClock,set, debug } from 'react-native-reanimated'

const toggleOpacityTimer=(clock,gestureState)=>{
    const state={
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    }
    const config={
        toValue: new Value(-1),
        duration: 300,
        easing: Easing.inOut(Easing.ease)
    }
    return block([
        cond(and(eq(gestureState,State.BEGAN),neq(config.toValue,1)),[
            set(state.finished,0),
            set(state.time,0),
            set(state.frameTime,0),
            set(config.toValue,1),
            debug('start began clock',startClock(clock))
        ]),
        cond(and(eq(gestureState,State.END),neq(config.toValue,0)),[ // 1 to 0
            set(state.finished,0),
            set(state.time,0),
            set(state.frameTime,0),
            set(config.toValue,0),// 1 to 0 
            debug('start end clock',startClock(clock))
        ]),
        // we run that is going to update position
        timing(clock,state,config),
        cond(state.finished,debug('stop clock',stopClock(clock))),
        // return position from outputRange ..
        interpolate(state.position,{
            inputRange: [0, 1],
            outputRange: [1,0],
            extrapolate: Extrapolate.CLAMP
        })
    ])
}

export default class Index extends Component {

    clock = new Clock();
    gestureState = new Value(-1);
    onGestureEvent= event([
        {
            nativeEvent: { state: this.gestureState }
        }
    ])
    opacity = toggleOpacityTimer(this.clock,this.gestureState)

    render() {
        return (
            <View style={{flex: 1}}>
                <TapGestureHandler
                    
                    onGestureEvent={this.onGestureEvent}
                    onHandlerStateChange={this.onGestureEvent}
                >
                    <Animated.View
                        style={[
                            styles.box,
                            {
                                opacity: this.opacity
                            }
                        ]}
                    >
                    </Animated.View>
                </TapGestureHandler>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        opacity: 0.6
    }
})
