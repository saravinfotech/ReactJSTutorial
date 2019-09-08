import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

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
    </div>
  );
}
}

export default App;
