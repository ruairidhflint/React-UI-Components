import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className="calculator">
      <div className="row">
        <CalculatorDisplay /></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
};

export default App;
