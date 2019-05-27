import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent';

function CardContainer({one, two, three, four}){
    return(
        <div className="card-contents">
        <a href={four}>
            <CardBanner imageURL={one}/>
            <CardContent title={two} text={three} link={four}/>
        </a>
        </div>
    )
}

export default CardContainer;
