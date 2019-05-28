import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import CreateButtons from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';

const App = () => {
  return (
    <div className="calculator">
      <div className="display-row">
        <CalculatorDisplay displayNumber="0" /></div>
      <div>
        <ActionButton action="clear" buttonStyle="largeButton" />
        <CreateButtons links={buttonContent}/>
        <ActionButton action="0" buttonStyle="largeButton" />
        <CreateButtons links={buttonContent2}/>
      </div>
    </div>
  );
};


const buttonContent = [{text:"%", buttonStyle:"smallActionButton"}, {text: "7", buttonStyle:"smallButton"},
{text: "8", buttonStyle:"smallButton"}, {text: "9", buttonStyle:"smallButton"}, {text: "x", buttonStyle:"smallActionButton"},
{text: "4", buttonStyle:"smallButton"}, {text: "5", buttonStyle:"smallButton"}, {text: "6", buttonStyle:"smallButton"}, {text: "-", buttonStyle:"smallActionButton"},
{text: "1", buttonStyle:"smallButton"}, {text: "2", buttonStyle:"smallButton"}, {text: "3", buttonStyle:"smallButton"}, {text: "+", buttonStyle:"smallActionButton"},
 ];

 const buttonContent2 = [{text: "=", buttonStyle:"smallActionButton"}];

export default App;
