import React from 'react'
import { StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
const {width,height} = Dimensions.get('window')
// import { Ionicons } from '@expo/vector-icons'
// import LinearGradient from 'react-native-linear-gradient'; //not web supperted;


const BackgroundHeader = ({style}) => {
    return (
        <LinearGradient
            start={{x: 0,y: 0}}
            end = {{x: 1,y: 0}} //100% left
            colors={["#55367B", "#73307B","#922B7D"]}
            style={[style,styles.linearGradient]}
        >
            <View style={[styles.lines,{
                        top: 40, // change it
                        right: width/1.4,  // change it
            }]}/>
            <View style={[styles.lines,{
                        top: 90,
                        right: width/2.5,
            }]}/>
            <View style={[styles.lines,{
                        top: 140,
                        right: 10,
            }]}/>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: 25
                }}>
                    <View>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>Hi Carly</Text>
                    </View>
                    <View>
                        <Text style={{
                            color: 'white'
                        }}>How are you feeling today?</Text>
                    </View>
                </View>
                <View style={[styles.faceContainer,
                {
                    position: 'absolute',
                    borderRadius: 10,
                    top: 170,
                    left: 15,
                    right: 15,
                    zIndex: 200,
                    backgroundColor: '#ffffff',
                    padding: 15,

                    shadowOffset: {width: 0,height: 5},
                    shadowRadius: 4,
                    shadowOpacity: 0.9,
                    shadowColor: '#E9E9E8'
                
                }]}>
                    <View style={styles.faceContainer}>

                        <View style={styles.faceGroup}>
                            <TouchableOpacity>
                                <Text>😍</Text>
                                <Text style={{color: '#DC95C1'}}>Great</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.faceGroup}>
                            <TouchableOpacity>
                                <Text>😀</Text>
                                <Text style={{color: '#DC95C1'}}>Good</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.faceGroup}>
                            <TouchableOpacity style={{alignContent: 'center'}}>
                                <Text>😐</Text>
                                <Text>Okey</Text>
                            </TouchableOpacity>
                        </View>                        
                        <View style={styles.faceGroup}>
                            <TouchableOpacity>
                                <Text>😞</Text>
                                <Text>Bad</Text>
                            </TouchableOpacity>
                        </View>                        
                        <View style={styles.faceGroup}>
                            <TouchableOpacity>
                                <Text>😥</Text>
                                <Text>Awful</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
        </LinearGradient>
    )
}

export default BackgroundHeader;

const styles = StyleSheet.create({
    linearGradient: {
        // height: (width * 3)/4, // 270 -width: 360; note-3
        height: height / 3,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    // backgroundColor: '#6C3D81',
    lines: {
        height: 55,
        width: width,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 65/2,
        position: 'absolute',
        transform: [{rotate: '160deg'}]
    },
    faceContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    faceGroup:{
        alignSelf: 'center'
    },
    faceText:{
        marginRight: 20

    }
})
