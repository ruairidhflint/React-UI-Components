import React from 'react';
import './Header.css';


function ImageThumbnail( {imgLink} ){
    return (
    <img src={imgLink} alt="" />
    );
}

export default ImageThumbnail;