import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Parent />
      </header>
    </div>
  );
}

class Parent extends React.Component{
  render(){
    return(
      <div><h2>Just some info</h2>
      <Car msg="hello" additionalMessage="Welcome to this tutorial" arrayProps={this.props.cars}/>
  </div>
    );
  }
}

Parent.defaultProps = {
  cars:["BMW","Audi","Merc","City"]
}

class Car extends React.Component{
  render(){
    return(
      <div>
          <h3>Cars are wonderful</h3>
          <h6>{this.props.msg}</h6>
          <h7>{this.props.additionalMessage}</h7>
          <h1>{this.props.arrayProps}</h1>
          <h2>{this.props.arrayProps.map((item,i)=>{
              return " "+item;
            })}</h2>
      </div>
    );
  }
}

export default App;
