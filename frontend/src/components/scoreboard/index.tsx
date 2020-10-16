import React from 'react';
import './styles.css';

function Scoreboard(){
    return(
        <div className="score">
            <div className="pointOne">
                <span>0</span>
            </div>
            <div className="pointTwo">
                <span>1</span>
            </div>
        </div>
    );
}

export default Scoreboard;