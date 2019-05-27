import React from 'react';
import './Card.css';

function CardBanner({cardImageURL}){
    return(
        <img src={cardImageURL} alt="" />
    );
}

export default CardBanner;
