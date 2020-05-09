import React from 'react';
import { 
  View,
  StyleSheet,
  } from 'react-native';
import BasicAnimate from './fundamental-animation/model/App'

function App() {
  return (
    <View style={styles.container}>
      <BasicAnimate/>
      {/* <InterpolateApp/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
export default  App;