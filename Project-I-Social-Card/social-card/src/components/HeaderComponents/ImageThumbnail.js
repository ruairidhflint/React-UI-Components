import React from 'react';
import './Header.css';


function ImageThumbnail( {imageSource}) {
    return(
        <div className="img-container">
          <img src={imageSource} alt=""/>
        </div>
    )
}


export default ImageThumbnail;

