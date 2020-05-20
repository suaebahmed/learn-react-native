
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
                  this.av.flattenOffset();
                  
                  Animated.decay( this.av,{
                     deceleration : 0.99,
                     velocity : { 
                         x: gestureState.vx,
                         y: gestureState.vy
                     }
                  }).start()
            }
            
      
}
