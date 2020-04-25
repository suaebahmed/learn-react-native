import React from 'react';
import { 
  View,
  StyleSheet,
  // Text,
  // Button,
  //  TextInput,
  //   Image,
  //   ScrollView,
  //   ActivityIndicator,
  //   FlatList,
  //   SectionList,
  //   TouchableOpacity 
  } from 'react-native';
// import Header from './components/Header';
// import StartGameScreen from './screens/StartGameScreen';
// import Code from './examples/Code';
// import Code2 from './examples/Code2';
// import Swipable from './examples/swipable';
// import ExamApp from './examples/transitions/App';
// import  ExamTransition from './examples/rivisionTransition/Transition';
// import AppClone from './examples/cloneTransition/App';
// import AppReactApi from './reactApi/App';
// import RanRotateZoomApp from './examples/PanRotateZoom/Index';
// import ChatsHeadApp from './examples/chatsHead/Index';
// import CicleAp from './reactApi/Code';
// import App1 from './Rivision2/App1';
// import IndexChat from './examples/chatsHead/Index';
// import IndexColorBall from './examples/colors/Index';
// import DiffSpringConfigs from './examples/differentSpringConfigs/Index';
// import Snappable from './examples/snappable/Index';
// import AppTwitterHeader from './reactApi/twitterHeader/App';
// import BasicOpacity from './reactApi/toggleOpacity/Basic';
// import OpacityToggle from './reactApi/toggleOpacity/Index';

// import App2 from './Rivision2/App2';
// import Motion from './reactApi/toggleOpacity/Motion';
// import FadeIn from './reactApi/FadeIn'
import IndexProggressBar from './circularProgress/Index'

function App() {
  return (
    <View style={styles.container}>
      {/* <AppReactApi/> */}
      {/* <RanRotateZoomApp/> */}
      {/* <CicleAp/> */}
      {/* <App1/> */}
      {/* <IndexChat/>
      <IndexColorBall/> */}
      {/* <Snappable/> */}
      {/* <DiffSpringConfigs/> */}
      {/* <AppTwitterHeader/> */}
      {/* <BasicOpacity/>
      <OpacityToggle/> */}
      {/* <FadeIn/> */}
      {/* <Motion/>
      <App2/> */}
      <IndexProggressBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default  App;