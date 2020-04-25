import React from 'react'
import { StyleSheet, View,Dimensions } from 'react-native'
import Animated from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');

const { cond, eq, add, call, set, Value, event } = Animated;

export default class App1 extends React.Component {
    constructor(props){
        super(props)

        this.dragX = new Value(0);
        this.dragY = new Value(0);
        this.offsetX = new Value(width / 2);
        this.offsetY = new Value(100);
        this.onGestureState = new Value(-1);
        this.onGestureEvent = event([
            {
              nativeEvent: {
                translationX: this.dragX, //wrong --transition
                translationY: this.dragY,
                state: this.onGestureState, // wrong --this.gestureState
              },
            },
          ]);
                                   //    state ACTIVE so  dragging value 
        this.transX = cond(eq(this.onGestureState,State.ACTIVE),add(this.offsetX,this.dragX),// wrong --this.gestureState
            // set(this.offsetX,this.dragX) // width/2 + 0
            set(this.offsetX,add(this.offsetX,this.dragX)) 
        )

        this.transY = cond(eq(this.onGestureState,State.ACTIVE),add(this.offsetY,this.dragY),
            set(this.offsetY,add(this.offsetY,this.dragY)) // 100 + 0
        );
    }

    onDrop=([x])=>{
        console.log(x)
        console.log(this.transX._value)
        console.log(this.transY);
    }


    render() {

        return (
            <View style={{
                flex: 1
            }}>
                <PanGestureHandler
                    maxPointers={1}
                    minDist={10}
                    onGestureEvent={this.onGestureEvent}
                    onHandlerStateChange={this.onGestureEvent}
                >
                    <Animated.View
                        style={[
                            styles.box,
                            {
                                transform:[
                                    {
                                        translateX: this.transX
                                    },
                                    {
                                        translateY: this.transY
                                    }
                                ]
                            }
                        ]}
                    />
                </PanGestureHandler>
            </View>
        )
    }
}

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: 'tomato',
    position: 'absolute',
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: '#000',
  },
});