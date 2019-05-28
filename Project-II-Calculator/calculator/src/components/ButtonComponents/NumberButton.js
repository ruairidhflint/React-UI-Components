import React from 'react';
import './Button.css';


function NumberButton(props){
    const { number, buttonStyle} = props;
    
    function clickHandler(){
        console.log(number);
    }
    return(
        <button onClick={clickHandler} className={buttonStyle}>
            {number}
        </button>
    );
}

export default NumberButton;