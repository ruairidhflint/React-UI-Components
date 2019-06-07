import React, { Component } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      operation: []

    }
  }

  display = (value) => {
    
    if (value === "="){
      let result = this.state.operation.join('');
      this.setState({
        display: [eval(result)],
        operation: [eval(result)]
      })
    }
    
    else {
      this.setState({
        display: this.state.display.concat(value),
        operation: this.state.display.concat(value)
      })
    }


  }

clear = () => {
  this.setState({
    display: []
  })

}

render() {
  return (
    <div className="calculator">
      <div className="display-row">
        <CalculatorDisplay displayNumber={this.state.display} /></div>
      <div>
        <ActionButton onClick={this.clear} action="clear" buttonStyle="largeButton" />

        {buttonContent.map(button => {
          return (
            <NumberButton
              key={button.value} onClick={this.display}
              content={button}
            />
          )
        })}

      </div>
    </div>
  );
};
}

const buttonContent = [{ text: "%", buttonStyle: "smallActionButton", value: "/" }, { text: "7", buttonStyle: "smallButton", value: "7" },
{ text: "8", buttonStyle: "smallButton", value: "8" }, { text: "9", buttonStyle: "smallButton", value: "9" }, { text: "x", buttonStyle: "smallActionButton", value: "*" },
{ text: "4", buttonStyle: "smallButton", value: "4" }, { text: "5", buttonStyle: "smallButton", value: "5" }, { text: "6", buttonStyle: "smallButton", value: "6" }, { text: "-", buttonStyle: "smallActionButton", value: "-" },
{ text: "1", buttonStyle: "smallButton", value: "1" }, { text: "2", buttonStyle: "smallButton", value: "2" }, { text: "3", buttonStyle: "smallButton", value: "3" }, { text: "+", buttonStyle: "smallActionButton", value: "+" },
{ text: "0", buttonStyle: "largeButton", value: "0" }, { text: "=", buttonStyle: "smallActionButton", value: "=" }];

export default App;