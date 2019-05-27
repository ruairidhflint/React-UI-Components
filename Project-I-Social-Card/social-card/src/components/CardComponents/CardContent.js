import React from 'react';
import './Card.css';


function CardContent( {title, text, link}) {
    return(
        <div className="card-content-bottom">
            <h2>{title}</h2>
            <p>{text}
            </p>
            <h3>{link}</h3>
        </div>
    )
}


export default CardContent;