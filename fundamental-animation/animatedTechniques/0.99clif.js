
// There are also 0.01 cliff. this can be used
// to trigger the cliff at the beginning of a animation

componentWillMount (){
    this.av= new Animated.Value(0);
    this._panResponder= panResponder.create({})

}
