
componentWillMount (){

     this.av = new Animated.ValueXY(0);
     this._value = { x:0 , y: 0 };
     this.av.addListener(arg=> this._value = arg)

     this.penResponder = PanResponder.create({
            onStartShouldSetPanResponder : ()=> true ,
            onMoveShouldSetPanResponder : ()=> true ,

            onPenResponderGrant: (e,gestureState)=>{
                 this.av.setOffset({
                    x : this._value.x,
                    y : this._value.y
                 });
                 this.av.setValue({x:0, y:0})
            },
            onPenResponderMove : Animated.event([
                null,
                { dx : this.av.x, dy: this.av.y }
            ]),
            onPenResponderRelease : (e, gestureState)=>{
              //   value = x  
              //   Offset = 0
              //   Overall value = x + 0

              this.av.flattenOffset();
                  
                  Animated.decay( this.av,{
                     deceleration : 0.99,
                     velocity : { 
                         x: gestureState.vx,
                         y: gestureState.vy
                     }
                  }).start()
            }
      })

 rander(){
       const animatedStyle ={
             transform : this.av.getTranslateTransform()
       }
       return (
          <Animated.View
             style={[styles.box, animatedStyle]}
             {this._panResponder.panHandlers}
          >
          <Animated.View>

      )
   }
}
const styles = {
   box: {
     width : 120,
     height : 120,
     backgroundColor: "orange"
  }
}
