import React,{Component} from 'react';
import { StyleSheet, View, Dimensions, Text,PanResponder } from 'react-native';
const { width } = Dimensions.get('window');

class swipable extends Component {
    constructor(props){
        super(props);
        this.state={
            marginLeft: 1
        }
        this._panResponder = PanResponder.create({

                onStartShouldSetPanResponder: (evt,gestureState)=> true,
                onPanResponderMove: (evt,gestureState)=>{
                    this.setState({
                        marginLeft: gestureState.moveX
                    })
                }

            })
    }

    render() {
        return (
            <View style={[styles.bar,{
                marginLeft: this.state.marginLeft
            }]}
            {...this._panResponder.panHandlers}
            >
                <Text style={styles.text}>Swipeable bar</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bar:{
        width: width-5,
        height: 60,
        backgroundColor: 'blue',
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    }
})

export default swipable;
