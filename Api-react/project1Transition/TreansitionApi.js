import React, { Component } from 'react'
import { View, StyleSheet,Dimensions, Button} from 'react-native'
import Footer from './Footer';
import {Transition,Transitioning } from 'react-native-reanimated'

const {width}= Dimensions.get('window');

class TreansitionApi extends Component {
    constructor(props){
        super(props);
        this.state={
            card: [
                {id: '1',body: 'this is card 1'},
                {id: '2',body: 'this is card 2'},
                {id: '3',body: 'this is card 3'},
            ],
            count: 0
        }
        this.ref=React.createRef();
    }
    Handle1=()=>{
        // console.log('clicked')
    }
    transition = (
        <Transition.Together>
            {/* <Transition.In interpolation='easeIn'/> */}
            <Transition.Change durationMs={1000} 
            interpolation="easeInOut" /> 
        </Transition.Together>
    )
    transitionHandle=()=>{
        this.ref.current.animateNextTransition();
        if(this.state.count===2)
            this.setState({count: 0})
        else
            this.setState({count: this.state.count + 1})
    }
    componentDidMount=()=>{
        this.ref.current.animateNextTransition()
    }

    render() {
        const list = this.state.card.map((doc)=>(
            <View style={styles.contContainer} key={doc.id}>
            </View>
        ));

        var output;
        if(this.state.count == 0){
            output = (
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    {list}
            </View>
            )
        }else if(this.state.count == 1){
            output = (
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {list}
            </View>
            )
        }else{
            output = (
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                {this.state.card.map((doc)=>(
                <View style={{
                    width: (width/2) - 10,
                    margin: 5,
                    height: ((width/3) - 15)-20,
                    backgroundColor: 'red',
                    opacity: 0.7,
                    borderRadius: 5,
                }} key={doc.id}>            
                </View>
                ))}
            </View>
            )
        }

        return (
        <Transitioning.View
            ref={this.ref}
            transition={this.transition}
            style={styles.mainContainer}
            >
            <Button onPress={this.transitionHandle}
            title="transition" 
            />

            {/*---- this example change output variable-*/}
            {output && output}
            {/*---- this example only change the width value during animation */}

            <View style={[
                styles.footerOnBox,
                {
                    width: this.state.count ? 90 : 180,
                }]}>
            </View>

            <View style={styles.footerContainer}>
                    <Footer TextHandle='Randomize image' handler={this.Handle1} />
                    <Footer TextHandle='Delete image' handler={this.Handle1} />
            </View>
       </Transitioning.View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        height: '100%',
        width: width,
        paddingTop: 30
        },
    contContainer:{
        width: (width/3) - 10,
        margin: 5,
        height: ((width/3) - 15)-20,
        backgroundColor: 'red',
        opacity: 0.7,
        borderRadius: 5
    },
    footerContainer:{
        width: width,
        position: 'absolute',
        bottom: 0, 
        backgroundColor: '#333',
        opacity: 0.6,
    },
    footerOnBox:{
            height: 80,
            backgroundColor: 'blue',
            opacity: 0.5,
            padding: 10,
            position: 'absolute',
            left: 100,
            bottom: 40,
            margin: 50
    }
});
export default TreansitionApi;
