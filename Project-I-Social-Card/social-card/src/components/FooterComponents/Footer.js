import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer>
            <div className="test1">
                <FontAwesomeIcon icon="comment" size="1x" color="lightgrey" />
            </div>
            <div className="test1">
                <FontAwesomeIcon icon="retweet" size="1x" color="lightgrey" />
            </div>
            <div className="test1">
                <FontAwesomeIcon icon="heart" size="1x" color="lightgrey" />
            </div>
            <div className="test1">
                <FontAwesomeIcon icon="envelope" size="1x" color="lightgrey" />
            </div>
        </footer>
    );
}

export default Footer;