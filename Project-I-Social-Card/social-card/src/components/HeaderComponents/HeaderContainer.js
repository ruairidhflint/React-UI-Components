import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderContent from "./HeaderContent.js";

function HeaderContainer({one, two, three, four}){
    return(
        <header>
            <ImageThumbnail imageSource={one} />
            <HeaderContent header={two} sub={three} headerText={four}/>
            
        </header>
    )
}

export default HeaderContainer; 