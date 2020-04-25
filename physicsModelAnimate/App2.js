import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { block, Clock, divide, diff, set, stopClock,
     startClock, lessThan, add, and, multiply, interpolate,
     cond,eq,Value,event, debug,abs, call } from 'react-native-reanimated'

const VALOCITY = 100;
const POSITION_THRESHOLD = 1;

const interection = (dragValue,getureState)=>{
    const start = new Value(0);
    const dragging = new Value(0);
    const position = new Value(0);

    const valocity= new Value(0);

    const clock = new Clock();
    const dt = divide(debug('diff clock: ',diff(clock)),1000);

    return cond(eq(getureState,State.ACTIVE),
    [
        cond(dragging,0[set(dragging,1),set(start,position)]),
        stopClock(clock),
        // dt
        divide(debug('diff clock: ',diff(clock)),1000),
        set(position,add(start,dragValue))
    ],
    [
        set(dragging,0),
        startClock(clock),

        set(valocity,cond(lessThan(position,0), VALOCITY,-VALOCITY)),

        cond(and(
            lessThan(position,POSITION_THRESHOLD),
            lessThan(-POSITION_THRESHOLD,position)),
                [stopClock(clock),set(valocity,0),set(position,0)]
        ),
        set(position,add(position,multiply(valocity,dt)))
    ])
}



function force(dt,position,velocity){
    return set(velocity,cond(lessThan(position,0),VALOCITY,-VALOCITY))
}

function stopWhenNeeded(dt,position,velocity,clock){
    return cond(
        and(
            // -1 < position < 1
            lessThan(position,POSITION_THRESHOLD),
            lessThan(-POSITION_THRESHOLD,position),
        ),
        [stopClock(clock),set(velocity,0),set(position,0)]
    )
}
//the events to be handled in a performant way (that is not calling into JS every frame)
function interaction2(gestureTranslation, gestureState) {

    const dragging = new Value(0);
    const start = new Value(0);// start is previous position value
    const position = new Value(0)
    const velocity = new Value(0);
    const clock = new Clock();
    const dt = divide(diff(clock),1000);

    //In Reanimated arrays are used to represent block nodes
    return cond(
      eq(gestureState, State.ACTIVE),
      [
          // when State.ACTIVE  dragging assign only one times (dragging = 1);
        cond(dragging, 0, [set(dragging, 1), set(start, position)]),
        stopClock(clock),
        dt,
        // debug('clock time: ',dt),
        set(position, add(start, gestureTranslation)),
      ],
      [set(dragging, 0),//debug('postion: ',position),
        // [set(dragging, 0), position]  // first part..
        
        startClock(clock),

        force(dt,position,velocity), // valocity = VALOCITY or -VALOCITY
        // cond(lessThan(abs(velocity), POSITION_THRESHOLD), stopClock(clock)),
        stopWhenNeeded(dt,position,velocity,clock),
        
        set(position, add(position,multiply(velocity, dt))),
    ]
    );
  }


class App2 extends Component {
    constructor(props){
        super(props)

        this.dragX = new Value(0);
        this.dragY = new Value(0);

        this._onGestureState = new Value(-1);
        this._onGestureEvent= event([
            {
                nativeEvent: {
                    translationX: this.dragX,
                    // translationY: this.dragY,
                    state: this._onGestureState
                }
            }
        ]);
        // this.transX = interection(this.dragX,this._onGestureState);
        // this.transY = interection(this.dragY,this._onGestureState);
        // this.transY = interaction2(this.dragY,this._onGestureState)
        this.transX = interaction2(this.dragX,this._onGestureState)
    }
    endCalledHandler=([x,y])=>{

    }
    render() {
        return (
            <View>
                <Animated.Code>
                    {()=>{
                        cond(eq(this._onGestureState,State.END),
                        call([this.dragX,this.dragY],this.endCalledHandler)
                        )
                    }}
                </Animated.Code>
                <PanGestureHandler
                    maxPointers={1}
                    minDist={10}
                    onGestureEvent={this._onGestureEvent}
                    onHandlerStateChange={this._onGestureEvent}
                >
                    <Animated.View
                        style={[
                            styles.box,
                            {
                                transform: [{translateX: this.transX}]
                            }
                        ]}
                    >
                    </Animated.View>
                </PanGestureHandler>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        alignSelf: 'center',
        marginBottom: 40,
        borderRadius: 5,
    },
});

export default App2;