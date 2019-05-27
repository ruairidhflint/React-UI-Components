import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent';

function CardContainer(){
    return(
        <div className="card-contents">
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;
