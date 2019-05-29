import React, { useState } from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import CreateButtons from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';



const App = () => {
  let [myDisplay, updateMyDisplay] = useState(0);
  
  function renderNumber(x){
    updateMyDisplay(myDisplay = x.target.textContent)
  }

  function setToZero(x){
    updateMyDisplay(myDisplay = 0)

  }
  
  return (
    <div className="calculator">
      <div className="display-row">
        <CalculatorDisplay displayNumber={myDisplay} /></div>
      <div>
        <ActionButton  onClick={setToZero} action="clear" buttonStyle="largeButton" />
        <CreateButtons  onClick={renderNumber} links={buttonContent}/>
  
      </div>
    </div>
  );
};




 const buttonContent = [{text:"%", buttonStyle:"smallActionButton"}, {text: "7", buttonStyle:"smallButton"},
{text: "8", buttonStyle:"smallButton"}, {text: "9", buttonStyle:"smallButton"}, {text: "x", buttonStyle:"smallActionButton"},
{text: "4", buttonStyle:"smallButton"}, {text: "5", buttonStyle:"smallButton"}, {text: "6", buttonStyle:"smallButton"}, {text: "-", buttonStyle:"smallActionButton"},
{text: "1", buttonStyle:"smallButton"}, {text: "2", buttonStyle:"smallButton"}, {text: "3", buttonStyle:"smallButton"}, {text: "+", buttonStyle:"smallActionButton"},
{text: "0", buttonStyle:"largeButton"}, {text: "=", buttonStyle:"smallActionButton"}];

export default App;
