import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {mic} from './p5';
import  { FirebaseContext } from './Firebase';


class App extends Component{
constructor(){
    super();
    this.state = {color:[Math.random()*255, Math.random()*255, Math.random()*255]};
    this.randomColor = this.randomColor.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  randomColor(){
    this.setState({color:[Math.random()*255, Math.random()*255, Math.random()*255]}
    )
  }

  deleteUser(fb){
    fb.db.collection('users').doc('NLi76ZESLb5ZVcUfqflw')
      .delete()
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err))
  }

  render() {
    return(
      <FirebaseContext.Consumer>
        {firebase => {
          // this.deleteUser(firebase);
          return (
            <>
              <button onClick={this.randomColor}>Random Color</button>
              <P5Wrapper sketch={mic}  ></P5Wrapper>
            </>
          )
          
        }}
      </FirebaseContext.Consumer>
    )
  }
}

export default App;
