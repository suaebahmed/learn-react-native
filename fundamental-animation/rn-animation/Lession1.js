import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, PanResponder } from 'react-native'

export default class Lession1 extends Component {
    constructor(props){
        super(props);
        this.state={
            animation: new Animated.ValueXY(0)
        }
        this.dragX = 0 // not be -new Animated.Value(0)
        this.dragY = 0

        this.state.animation.addListener((value)=>{
            this.dragX = value.x; // because value is string and like object.
            this.dragY = value.y;
            
        })
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: ()=>true,
            onMoveShouldSetPanResponder: ()=>true,

            onPanResponderGrant: (e,gestureState)=>{
                console.log('grant')
                this.state.animation.setOffset({
                    x: this.dragX,
                    y: this.dragY
                })
                this.state.animation.setValue({
                    x: 0,
                    y: 0,
                })
            },
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: this.state.animation.x,
                    dy: this.state.animation.y
                }
            ]),
            onPanResponderRelease: (e,{vx,vy})=>{
                console.log('release')
                Animated.decay(this.state.animation,{
                    velocity: {x: vx,y: vy},
                    deceleration: 0.997
                }).start();
            }

        })
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Animated.View
                    style={[
                        styles.box,
                        {
                            transform : this.state.animation.getTranslateTransform()
                        },
                        
                    ]}
                    {...this._panResponder.panHandlers}
                >
                </Animated.View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: 'tomato',
        height: 100,
        width: 100,
    }
})
