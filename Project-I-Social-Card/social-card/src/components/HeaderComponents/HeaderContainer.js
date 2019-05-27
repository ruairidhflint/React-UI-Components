import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderContent from "./HeaderContent.js";

function HeaderContainer(){
    return(
        <header>
            <ImageThumbnail />
            <HeaderContent/>
            
        </header>
    )
}

export default HeaderContainer; 