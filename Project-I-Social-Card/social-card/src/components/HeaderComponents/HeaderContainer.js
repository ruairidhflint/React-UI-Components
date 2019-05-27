import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderContent from "./HeaderContent.js";

const headerContentText = "Let's learn React by building simple interfaces with components. Don't try to overthing it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way tomastering React";

function HeaderContainer(){
    return(
        <header>
            <ImageThumbnail imageSource="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" />
            <HeaderContent headerText={headerContentText}/>
            
        </header>
    )
}

export default HeaderContainer; 