import React from 'react';
import './Button.css';

function NumberButton(props){
    const { text, buttonStyle} = props;
    

    return(
        <button className={buttonStyle}>
            {text}
        </button>
    );
}

function CreateButtons(props){
    const  { links } = props;
   
    return (
        <>
            {
             links.map(link => {
                 return <NumberButton text={link.text} buttonStyle={link.buttonStyle} /> 
             })
            }
        </>
    );
}


export default CreateButtons;
