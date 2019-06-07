import React from 'react';
import './Button.css';

function NumberButton(props){

    return(
        <button onClick={() => props.onClick(props.content.value)} className={props.content.buttonStyle}>
            {props.content.text}
        </button>
    );
}


export default NumberButton;
