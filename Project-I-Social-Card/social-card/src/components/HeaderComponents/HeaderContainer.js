import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent';

function HeaderContainer( {imgLink, mainHeader, subHeader, subDate, headerText}){
   return( <div className="head-cont">
       <div className="head-left">
           <ImageThumbnail imgLink={imgLink} />
       </div>
       <div className="head-right">
           <HeaderTitle mainHeader={mainHeader} subHeader={subHeader} subDate={subDate}/>
           <HeaderContent headerText={headerText} />
       </div>

    </div>

   )
}

export default HeaderContainer;