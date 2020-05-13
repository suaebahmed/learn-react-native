import React from "react"
import { View,Text,PanResponder} from "react-native"

     state={
        Heads:[
        { img : "./I'm going.png",
          animatedValue : new Animated.Value(0)
        },
     }
componentWillMount(){
   this._panResponder = PanResponder.create({
     ...
     onPenResponderGrant: (e,{dx,dy}){
         this.state.heads.forEach(({animatedValue})=>{
               animatedValue.exactOffset()
               animatedValue.setValue({x:0,y:0})
     }
     onPenResponderMove: (e,{dx,dy})=>{
         this.state.heads[0].animatedValue.setValue({
                                           x: dx,
                                           y: dy })
         this.state.heads.slice(1).map();
             ...Animated.sequence([
                   Animated.delay(1500),
                   Animated.timing(),
              ])
     }
}
