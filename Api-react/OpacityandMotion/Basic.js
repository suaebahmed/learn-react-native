import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const { Value, event, cond, eq,set } = Animated

export default class Basic extends Component {
    constructor(props){
        super(props);
        this.oldOpacity= new Value(1)
        this.newOpacity= new Value(0)

        this.gestureState = new Value(-1);
        this._onGestureEvent = event([
            {
                nativeEvent: {
                    state: this.gestureState
                }
            }
        ])
        this._opacity = cond(eq(this.gestureState,State.BEGAN),0,1);
        // this._opacity = cond(eq(this.gestureState,State.BEGAN),set(this.newOpacity,0),set(this.oldOpacity,1));
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <TapGestureHandler
                    onGestureEvent={this._onGestureEvent}
                    onHandlerStateChange={this._onGestureEvent}
                >
                    <Animated.View
                        style={[
                            styles.box,
                            {
                                opacity: this._opacity
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
        backgroundColor: 'blue',
        margin: 100
    }
})
