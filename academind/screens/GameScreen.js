import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native';
import NumberSelected from '../components/NumberSelected';
import Card from '../components/Card'

const generateRndomBetween = (min,max,exclude)=>{
    min= Math.ceil(min);
    max= Math.floor(max);
    const rndNum = Math.floor(Math.random()* (max-min)) + min;
    if(rndNum == exclude){
        return generateRndomBetween;
    }else{
        return rndNum;
    }
}
function GameScreen(props) {
    const [currentGuess, setCurrentGuess] = useState(
        generateRndomBetween(1,100,props.userChoice));
        
    return (
        <View>
            <NumberSelected>{00}</NumberSelected>
            <Card style={styles.card}>
                <Button title="lower"></Button>
                <Button title="greater"></Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    card:{
        padding: 10
    },
    button:{

    },
})

export default GameScreen;
