import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle.js";

function HeaderContent( {header, sub, headerText}) {
    return(
        <div className="header-content">
            <HeaderTitle header={header} subHeader={sub} />
            <p>{headerText}
            </p>

        </div>
    )
}


export default HeaderContent;


