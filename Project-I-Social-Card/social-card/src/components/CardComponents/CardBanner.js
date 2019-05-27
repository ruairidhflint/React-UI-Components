import React from 'react';
import './Card.css';

function CardBanner( {imageURL}){
    return(
        <div className="image-container">
            <img src={imageURL} alt="" />
        </div>
    )
}


export default CardBanner;