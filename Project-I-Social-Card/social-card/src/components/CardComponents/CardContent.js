import React from 'react';
import './Card.css';

function CardContent({ cardTitle, cardText, cardURL }) {
    return (
        <div className="card-content-main">
            <h2>{cardTitle}</h2>
            <p>{cardText}</p>
            <h3>{cardURL}</h3>
        </div>
    )
}

export default CardContent;