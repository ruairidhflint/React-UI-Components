import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent';

function CardContainer(){
    return(
        <div className="card-contents">
        <a href="http://reactjs.org">
            <CardBanner imageURL="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"/>
            <CardContent title="Get Started with React" text="React makes it painless to create interactive UIs. Design simple
                views for each state in your application." link="reactjs.org" />
        </a>
        </div>
    )
}

export default CardContainer;
