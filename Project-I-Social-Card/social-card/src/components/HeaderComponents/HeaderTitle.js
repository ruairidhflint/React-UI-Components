import React from 'react';
import './Header.css';


function HeaderTitle( {header, subHeader}) {
    return (
        <div className="title">
        <h2>
            {header}
        </h2>
        <h3>{subHeader}</h3>
        </div>
    )
}


export default HeaderTitle;