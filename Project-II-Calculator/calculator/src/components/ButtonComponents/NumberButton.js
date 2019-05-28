import React from 'react';
import './Button.css';


function NumberButton(props){
    const { number, buttonStyle} = props;
    return(
        <button className={buttonStyle}>
            {number}
        </button>
    );
}

export default NumberButton;