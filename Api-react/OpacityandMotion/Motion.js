import React, { Component } from 'react'
import { StyleSheet, View, Button,Animated } from 'react-native'
// import Animated, { Clock,Easing,cond,
//     Value,block, startClock, timing,
//     stopClock,set, debug,clockRunning } from 'react-native-reanimated'

const rumTiming=(clock,value,dest)=>{
    const state={
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0)
    }
    const config={
        duration: 5000,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease)
    }
    // debug('hello')
    console.log('hello') // only one time

    return block([
        cond(
            clockRunning(clock),
            [
                set(config.toValue,dest),
                // debug('start',set(config.toValue,dest)) // 400;
            ],
            [
                set(state.finished,0),
                set(state.time,0),
                set(state.position,value), // -1
                set(state.frameTime,0),
                set(config.toValue,dest),   // 400
                debug('end',startClock(clock))

            ]
        ),
        // we run that is going to update position
        timing(clock,state,config),
        // starting point state.finished = 0 , finally state.finish = 1
        cond(state.finished,debug('stop clock',stopClock(clock))),
        // return position value of node
        // debug('position: ',state.position) // value=-1 to dest=400
        state.position
    ])
}

export default class Motion extends Component {

    constructor(props){
        super(props);
        this.state={
            transX : new Animated.Value(0)
        }
        this._amin = Animated.timing(this.state.transX,{
            toValue: 400,
            duration: 1000
        })
        // this.clock = new Clock();
        // this._transX = rumTiming(this.clock,-1,400)
    }
    handlerAnimation=()=>{
        Animated.timing(this.state.transX,{
            toValue: 0,
            duration: 1000,
        }).start()
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <Button onPress={()=>{this._amin.start()}} title='run' color='blue' />
                <Button onPress={this.handlerAnimation} title='got back' />

                    <Animated.View
                        style={[
                            styles.box,
                            {
                                transform : [{translateX: this.state.transX}],
                            }
                        ]}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        opacity: 0.7,
        borderRadius: 50
    }
})
