import React from 'react';
import './Display.css';

function CalculatorDisplay({displayNumber}) {
    return(
        <div className="display">
            <h1>{displayNumber}</h1>
        </div>
    )
}

export default CalculatorDisplay;