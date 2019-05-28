import React from 'react';
import './Button.css';

function NumberButton(props){
    const { text, buttonStyle, onClick} = props;
    

    return(
        <button onClick={onClick} className={buttonStyle}>
            {text}
        </button>
    );
}

function CreateButtons(props){
    const  { links, onClick } = props;
   
    return (
        <>
            {
             links.map(link => {
                 return <NumberButton text={link.text} buttonStyle={link.buttonStyle} onClick={onClick}/> 
             })
            }
        </>
    );
}


export default CreateButtons;
