import React from 'react';
import './Button.css';


function ActionButton(props){
    const { action, buttonStyle, onClick} = props;
    return(
        <button onClick={onClick} className={buttonStyle}>
            {action}
        </button>
    );
}


export default ActionButton;