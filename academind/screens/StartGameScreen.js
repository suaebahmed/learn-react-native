import React,{useState} from 'react'
import Colors from '../constants/Color'
import {
     View,
     Button,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard ,
    Alert,
    } from 'react-native'
import Card from '../components/Card'

import Input from '../components/Input'
import NumberSelected from '../components/NumberSelected'

function OverGameScreen() {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [selectedNum, setSelectedNum] = useState(0)

    const numberInputHandle=(text)=>{
        setEnteredValue(text.replace(/[^0-9]/g,''));
    }
    const resetInputHandle=()=>{
        setEnteredValue('')
        setConfirm(false)
    }
    const confirmInputHandle=()=>{
        const choseNum = parseInt(enteredValue);
        if(isNaN(choseNum) || choseNum <=0){
            Alert.alert('Invalid number',"Number has",[{text: 'Okey'},{style: 'destructive'},{onPress: resetInputHandle}]);
            return;
        }
        console.log(choseNum)
        setConfirm(true)
        setEnteredValue('')
        setSelectedNum(choseNum)
    }
    let confirmOutput;
    if(confirm){
    confirmOutput = (
                    <View style={styles.outContainer}>
                        <Text style={{textAlign: 'center'}}>You Selected</Text>
                        <NumberSelected>{selectedNum}</NumberSelected>
                        <Button title='START GAME' onPress={()=>{}}></Button>
                    </View>
                    )
    }

    return (
        // <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}> 
        <View style={styles.screen}>
            <Text style={styles.titleText}>Start new a game</Text>

            <Card>
            <View style={styles.inputContainer}>
                <Text style={{textAlign: 'center'}}>Select a Number!</Text>

                    <Input keyboardType='numeric' onChangeText={numberInputHandle} value={enteredValue} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="reset" onPress={resetInputHandle} color={Colors.success}/>
                    </View>            
                    <View style={styles.button}>
                        <Button title="comfim" onPress={confirmInputHandle} color={Colors.primary}/>
                    </View>
                </View>
            </View>
            </Card>

            {confirmOutput}

        </View>
        // </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer:{
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },
    buttonContainer:{
        padding: 10,
        flexDirection: 'row',
        
    },
    button:{
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 12
    },
    titleText:{
        textAlign: 'center',
        fontSize: 18,
    },
    outContainer:{
        margin: 20,
        paddingVertical: 18,
        paddingHorizontal: 30,
        borderRadius: 5,

        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        shadowOffset: { width: 0, height: 2},
        shadowColor: 'grey',                            
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }

})

export default OverGameScreen;
