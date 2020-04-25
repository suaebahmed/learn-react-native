import React, { Component } from 'react';
import { View, StyleSheet, Text, Image,ScrollView, Animated } from 'react-native'

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            scrollY: new Animated.Value(0)
        }
        // this.scrollY= new Animated.Value(0)
    }
    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0,HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        return (
            <View style={{flex: 1}}>
                <Animated.View style={{
                    position: 'absolute',
                    top:0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'lightskyblue',
                    height: headerHeight
                }} >
                </Animated.View>

                <ScrollView style={{
                    flex: 1,
                }}
                    scrollEventThrottle={16}
                    onScroll={e=>{console.log(e)}}
                >
                    <View style={{
                        height: PROFILE_IMAGE_MAX_HEIGHT,
                        width: PROFILE_IMAGE_MAX_HEIGHT,
                        borderRadius: (PROFILE_IMAGE_MAX_HEIGHT /2),
                        overflow: 'hidden',
                        marginTop: HEADER_MAX_HEIGHT -( PROFILE_IMAGE_MAX_HEIGHT / 2),
                        marginLeft: 15
                    }}>
                        <Image style={{flex: 1,height: null,width: null}} source={require("../../assets/no-image.png")}>
                    </Image>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                        }}>suaeb ahmed</Text>
                    </View>
                <View style={{ height: 1000}} />


                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({})

export default App;