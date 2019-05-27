import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle.js";

function HeaderContent( {headerText}) {
    return(
        <div className="header-content">
            <HeaderTitle header="Lambda School" subHeader="@LambdaSchool  27 May 2019" />
            <p>{headerText}
            </p>

        </div>
    )
}


export default HeaderContent;


