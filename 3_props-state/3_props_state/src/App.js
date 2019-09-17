import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props){
    super(props);
    this.name ="hello";
  }

  sampleFunction(calledFrom){
    return "This method is "+calledFrom +" reactJS";
  }

  render(){
    const name="Sarav";

  return (
    <div className="App">
      <p> Welcome {name} this is keyword access sample</p>

      <p>This is a sample of method access to print. {this.sampleFunction("called from")}</p>

    <p> This is a sample to demo the call of constructor {this.name}</p>
    <h3>prop numbers is :{this.props.propNumbers}</h3>
    <h3>prop String is :{this.props.propString}</h3>
    <h3> prop Object is :{this.props.propObject.obj1}</h3>
    <Parent />
    </div>
  );
}
}

App.propTypes = {
  propObject : PropTypes.object,
  propString : PropTypes.string,
  propNumbers : PropTypes.number
}

App.defaultProps = {
  propNumbers : 3,
  propString : "Hello World",
  propObject : {
    obj1 : "I am first object",
    obj2 : "I am second object",
    obj3 : "I am third object",
  }
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
