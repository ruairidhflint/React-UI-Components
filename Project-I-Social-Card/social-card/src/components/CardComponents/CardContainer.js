import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

function CardContainer({ cardImageURL, cardTitle, cardText, cardURL }) {
    return (
        <div className="card-container">
            <a href="http://reactjs.org">
            <div className="card-image">
                <CardBanner cardImageURL={cardImageURL} />
            </div>
            <div className="card-content">
                <CardContent cardTitle={cardTitle} cardText={cardText} cardURL={cardURL} />
            </div>
            </a>
        </div>
    )
}

export default CardContainer;   
