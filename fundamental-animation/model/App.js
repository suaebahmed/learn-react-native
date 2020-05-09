import React, { useState } from 'react'
import { StyleSheet, Text, View, Animated, TouchableOpacity, Dimensions,TouchableWithoutFeedback } from 'react-native'
const { height } = Dimensions.get('window')

const App = () => {
    const [animation] = useState(()=>new Animated.Value(0));

    const background = animation.interpolate({
        inputRange: [0, 0.2,1.8,2],
        outputRange: [`rgba(255,255,255,0)`,`rgba(255,255,255,0.3)`,`rgba(255,255,255,0.3)`,`rgba(255,255,255,0)`],
        extrapolate: 'clamp'
    })
    const display = animation.interpolate({
        inputRange: [0.2, 1],
        outputRange: [0,1],
        extrapolate: 'clamp'
    })
    const success = animation.interpolate({
        inputRange: [1.1, 2],
        outputRange: [0, -height-180],
        extrapolate: 'clamp'
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity 
           onPress={()=>{
                Animated.spring(animation,{
                    toValue: 1,
                }).start();
           }}
            >
                <Text>Open</Text>
            </TouchableOpacity>

            <Animated.View pointerEvents="box-none" style={[
                styles.background,
                {   
                    backgroundColor: background
                }
                ]} >
                <Animated.View style={[styles.background,
                {
                    transform : [{scale: display}],
                    top: success
                }]}>
                {/* we exploring in this part */}
                <TouchableWithoutFeedback
                    style={[styles.background]}
                    onPress={()=>{
                        Animated.spring(animation,{
                            toValue: 0,
                        }).start();
                    }}
                >
                    <View style={styles.background}></View>
                </TouchableWithoutFeedback>

                    <View style={styles.wrap}>
                        <Text style={styles.headerText}>Hello!</Text>
                        <Text style={styles.regularText}>this is a wonderfull modal arn't it !</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.button,styles.buttonColor]}
                                onPress={()=>{
                                    Animated.spring(animation,{
                                        toValue: 0,
                                    }).start();
                                }}
                            >
                               <Text  style={styles.buttonText}> Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button]}
                                onPress={()=>{
                                        Animated.spring(animation,{
                                            toValue: 2,
                                        }).start(()=>{
                                            animation.setValue(0);
                                        })
                                }}
                            >
                               <Text  style={styles.buttonText}> Save</Text>
                            </TouchableOpacity>                        
                            </View>
                    </View>
                </Animated.View>
            </Animated.View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrap:{
        elevation: 10,
        borderRadius: 8,
        backgroundColor: "#fff",
        padding: 16,

        shadowOffset: { width: 0, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    headerText:{
        textAlign: 'center',
        fontSize: 34,
    },
    regularText: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 16,
    },
    button: {
        backgroundColor: '#007ffe',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 16,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonColor: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: 'center'
    }
})
