import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions ,Animated,PanResponder, TouchableOpacity} from 'react-native'
import clamp from './clamp'

const SWIPE_THRESHOLD = 120;
const { height } = Dimensions.get('window');
export default class KittenCard extends Component {

    state = {
        items: [
            {
                id: 1,
                image: 'cat1',
                text: 'Sweet Cat'
            },
            {
                id: 2,
                image: 'cat2',
                text: 'Happy Cat'
            },
            {
                id: 3,
                image: 'cat3',
                text: 'Cute Cat'
            },
            {
                id: 4,
                image: 'cat4',
                text: 'Sweetest Cat'
            },
        ],
        animation: new Animated.ValueXY(0),
        //
        opacity: new Animated.Value(1),
        next: new Animated.Value(0.9),

    }
    componentWillMount=()=>{
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: ()=>true,
            onMoveShouldSetPanResponder: ()=>true,

            onPanResponderGrant: (e,gestureState)=>{
                // this.state.animation.setOffset({
                //     x: this.dragX,
                //     y: this.dragY
                // })
                // this.state.animation.setValue({
                //     x: 0,
                //     y: 0,
                // })
            },
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: this.state.animation.x,
                    dy: this.state.animation.y
                }
            ]),
            onPanResponderRelease: (e,{dx,vx,vy})=>{
                let velocity;
                if(vx >= 0){
                    velocity = clamp(vx,3,4);
                }else if(vx <= 0){
                    velocity = clamp(Math.abs(vx),3,5) * -1;
                }
                
                if(Math.abs(dx)> SWIPE_THRESHOLD){
                    
                    Animated.decay(this.state.animation,{
                        velocity: { x: velocity,y: vy},
                        deceleration: .99
                    }).start(()=>{
                        this.transitionNext();
                    });
                }else{
                    Animated.spring(this.state.animation,{
                        toValue: { x: 0,y: 0},
                        friction: 4,
                    }).start();
                }
            }

        })
    }
    transitionNext = ()=>{
        Animated.parallel([
            Animated.timing(this.state.opacity,{
                toValue: 0,
                duration: 300,
            }),
            Animated.spring(this.state.next,{
                toValue: 1,
                friction: 4,
            })
        ]).start(()=>{
            // DOM updated..
            this.setState((state)=>{
                return {
                    items: state.items.slice(1) // remove first item from the array;
                }
            },()=>{
                this.state.animation.setValue({x: 0,y: 0});// reset the value
                this.state.next.setValue(0.9);
                this.state.opacity.setValue(1);
            })
        })
    }
    handleNo =()=>{
        Animated.timing(this.state.animation.x,{
            toValue: -SWIPE_THRESHOLD
        }).start(this.transitionNext());
    }
    handleYes =()=>{
        Animated.timing(this.state.animation.x,{
            toValue: SWIPE_THRESHOLD
        }).start(this.transitionNext());
    }
    render() {
        const { animation } = this.state;
        const rotateV = animation.x.interpolate({
            inputRange: [-200,0,200],
            outputRange: ["-30deg","0deg","30deg"],
            extrapolate: 'clamp',
        })
        const opacity = animation.y.interpolate({
            inputRange: [-200,0,200],
            outputRange: [.5,1,.1],
            extrapolate: 'clamp'
        })
        // nope! for yes
        const yesOpacity = animation.x.interpolate({
            inputRange: [0,150],
            outputRange: [0,1]
        })
        const yesScale = animation.x.interpolate({
            inputRange: [0,150],
            outputRange: [0.5,1],
            extrapolate: 'clamp'
        })
        // same yes interpolate
        const noOpacity = animation.x.interpolate({
            inputRange: [-150,0],
            outputRange: [1,0]
        })
        const noScale = animation.x.interpolate({
            inputRange: [-150,0],
            outputRange: [1,0.5],
            extrapolate: 'clamp'
        })
        // nope! style 
        const animatedNopeStyles = {
            transform: [{scale: noScale},{rotate: "20deg"}],
            opacity: noOpacity,
        } // same nope! style
        const animatedYupStyles = {
            transform: [{scale: yesScale},{rotate: "-20deg"}],
            opacity: yesOpacity,
        }
        
        const animtedCardStyles = {
            opacity: this.state.opacity,
            transform: [
                {
                    rotate: rotateV
                },
                // {
                //     scale: this.state.opacity
                // },
                ...this.state.animation.getTranslateTransform()
            ]
        }
        const animtedImageStyle = {
            opacity: opacity
        }
        return (
            <View style={styles.container}>
               <View style={styles.top}>
                {
                    this.state.items.slice(0,2).reverse().map(({id,image,text},index,items)=>{
                        const isLastItem = index == items.length - 1,
                             isSecondToLast = index == items.length - 2,

                             panHandlers = isLastItem ? this._panResponder.panHandlers : {},
                             cardStyle = isLastItem ? animtedCardStyles : undefined,
                             imgeStyle = isLastItem ? animtedImageStyle : undefined,
                             nextStyle = isSecondToLast ? {transform: [{scale: this.state.next}]} : undefined;


                        return (
                            <Animated.View 
                                style={[styles.card,cardStyle,nextStyle]}
                                key={id}
                                {...panHandlers}

                            >
                                    <Text style={styles.lowerText}>{text}</Text>

                                    {isLastItem && 
                                    <Animated.View style={[styles.nope,animatedNopeStyles]}>
                                        <Text style={styles.nopeText}>Nope!</Text>
                                    </Animated.View>
                                    }
                                    {isLastItem && 
                                    <Animated.View style={[styles.yup,animatedYupStyles]}>
                                        <Text style={styles.yupText}>Yes!</Text>
                                    </Animated.View>}

                            </Animated.View>
                        )
                    })
                }
               </View>
               <View style={styles.buttonBar}>
                    <TouchableOpacity 
                        onPress={this.handleNo}
                        style={styles.buttonNo}
                    >
                        <Text style={{color: 'red'}}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.handleYes}
                        style={styles.buttonYes}
                    >
                        <Text style={{color: 'green'}}>Yes</Text>
                    </TouchableOpacity>

               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    card: {
        width: 300,
        height: 300,
        position: 'absolute',
        borderRadius: 3,
        shadowOffset: {width: 0,height: 0},
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    lowerText: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    buttonNo:{
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: '50%',
        padding: 15,
        margin: 3,
        backgroundColor: '#FFF'
    },
    buttonYes:{
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: '50%',
        padding: 15,
        margin: 3,
        backgroundColor: '#FFF'
    },
    nope: {
        borderColor: 'red',
        borderWidth: 2,
        position: 'absolute',
        padding: 20,
        borderRadius: 5,
        top: 20,
        right: 20,
        backgroundColor: '#FFF'
    },
    nopeText: {
        fontSize: 16,
        color: 'red'
    },
    yup: {
        borderColor: 'green',
        borderWidth: 2,
        position: 'absolute',
        padding: 20,
        borderRadius: 5,
        top: 20,
        left: 20,
        backgroundColor: '#FFF'
    },
    yupText: {
        fontSize: 16,
        color: 'green'
    }
})
