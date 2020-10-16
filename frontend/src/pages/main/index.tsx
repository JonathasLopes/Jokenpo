import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import './styles.css';

function Main() {
    return (
        <div id="container">
            <h1>Jokenpô</h1>

            <div id="img">
                <img src={Logo} className="logo" alt="Jokenpo" />
            </div>
            
            <div className="buttons">
                <Link to="/Offline" className="firstButton"> P1 </Link>
                <Link to="/Online" className="secondButton"> Online </Link>
            </div>

        </div>
    );
}

export default Main;