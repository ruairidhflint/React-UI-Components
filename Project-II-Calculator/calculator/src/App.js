import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
const App = () => {
  return (
    <div className="calculator">
      <div className="display-row">
        <CalculatorDisplay /></div>
      <div className="row">
        <ActionButton action="clear" buttonStyle="largeActionButton" />
        <ActionButton action="%" buttonStyle='smallActionButton' />
      </div>
      <div className="row">
      <NumberButton number="7" buttonStyle='smallButton' />
      <NumberButton number="8" buttonStyle='smallButton' />
      <NumberButton number="9" buttonStyle='smallButton' />
      <ActionButton action="x" buttonStyle='smallActionButton' />
      </div>
      <div className="row">
      <NumberButton number="4" buttonStyle='smallButton' />
      <NumberButton number="5" buttonStyle='smallButton' />
      <NumberButton number="6" buttonStyle='smallButton' />
      <ActionButton action="-" buttonStyle='smallActionButton' />
      </div>
      <div className="row">
      <NumberButton number="1" buttonStyle='smallButton' />
      <NumberButton number="2" buttonStyle='smallButton' />
      <NumberButton number="3" buttonStyle='smallButton' />
      <ActionButton action="+" buttonStyle='smallActionButton' />
      </div>
      <div className="row">
      <NumberButton number="0" buttonStyle="largeButton" />
      <ActionButton action="=" buttonStyle='smallActionButton' />
      </div>
    </div>
  );
};

export default App;
