import React from 'react';
import './Header.css';

function HeaderTitle({ mainHeader,subHeader, subDate }){
    return(
        <div className="title-content">
            <h2>{mainHeader}</h2>
            <h3>{subHeader}&nbsp;</h3>
            <h3>{subDate}</h3>
        </div>
    );
}

export default HeaderTitle;