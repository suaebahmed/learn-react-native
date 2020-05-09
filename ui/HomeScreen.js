import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

// const icon2= ["check-circle","cancel","perm-contact-calendar","directions"]
// const reactIcon = ["emoticon-excited-outline","emoticon-happy-outline","emoticon-neutral-outline","emoticon-sad-outline","emoticon-dead-outline"];

const faceIcon = ['😍','😀','🤨','🙁','😣']
const cardIcn = ['✔','❌','🚛','🚚']

const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#F0F0F0',
            paddingTop: 245
        }}>
                <View style={{paddingHorizontal: 15}}>

                    <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 15,
                    }}>
                        <View>
                            <Text style={styles.text}>Your Next Appointment</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                            <View>
                            </View>
                            <View>
                                <Text>Dr. T Pay Dhar</Text>
                                <Text>Sunday,May 15th at 8:00 PM</Text>
                                <Text>570 Kemmer shores</Text>
                                <Text>San Francisco,CA 90293</Text>
                            </View>
                            <View>
                                <Text>🚩</Text>
                            </View>

                            <View style={{height: 2,backgroundColor: '#E9E9E9',margin: 15}} />

                            <View style={styles.cardIcon}>
                                <View style={styles.cardIconGroup}>
                                    <View><Text>{cardIcn[0]}</Text></View>
                                    <View><Text>Check-in</Text></View>
                                </View>
                                <View style={styles.cardIconGroup}>
                                <View><Text>{cardIcn[1]}</Text></View>
                                    <View><Text>Cancel</Text></View>
                                </View>
                                <View style={styles.cardIconGroup}>
                                <View><Text>{cardIcn[2]}</Text></View>
                                    <View><Text>Canlender</Text></View>
                                </View>
                                <View style={styles.cardIconGroup}>
                                <View><Text>{cardIcn[3]}</Text></View>
                                    <View><Text>Direction</Text></View>
                                </View>
                        </View>
                    </View>

                    <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 20,
                    }}>
                        <View>
                            <Text>Specialist in your area</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.card,{marginBottom: 20}]}>
                            <View>
                            </View>
                            <View>
                                <Text>Dr. T Pay Dhar</Text>
                                <Text>Sunday,May 15th at 8:00 PM</Text>
                                <Text>570 Kemmer shores</Text>
                                <Text>San Francisco,CA 90293</Text>
                            </View>
                            <View>
                                <Text>🚩</Text>
                            </View>
                    </View>

                </View>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    card:{
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    cardIcon:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardIconGroup:{
        
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});

// {/* <MaterialIcons name={icon} size={36} /> */}
// {reactIcon.map((icon,index)=>{
//     return(
//     <TouchableOpacity key={index}>
//         {/* <MaterialCommunityIcons name={icon} size={36} /> */}
//         <Text>{icon}</Text>
//     </TouchableOpacity>
//     )
// })}