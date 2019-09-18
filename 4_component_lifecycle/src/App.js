import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" height="100px" width="100px" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Body />
      </header>
    </div>
  );
}

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      randomNumber : 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    //alert("Hello")
    this.setState({randomNumber:Math.floor(Math.random()*10)});
  }

  render(){
    return (
      <div> <h2>This is a sample text</h2>
      <button onClick={this.getRandomNumber}> Random Number Generator</button>
      <Numbers myNumber = {this.state.randomNumber}/>
  </div>
    );
  }
}

class Numbers extends React.Component{
  render(){
    return(
      <div>
        <br/>
        {this.props.myNumber}
      </div>
    );
  }
}
export default App;
