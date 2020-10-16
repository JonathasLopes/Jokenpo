import React from 'react';
import './styles.css';
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper } from 'react-icons/fa';

function gestureHand(){
    return(
        <div className="gestures">
            <button className="firstGesture">
                <FaRegHandScissors size={60} className="icon" />
            </button>
            <button className="secondGesture">
                <FaRegHandRock size={60} className="icon" />
            </button>
            <button className="thirdGesture">
                <FaRegHandPaper size={60} className="icon" />
            </button>
        </div>
    );
}

export default gestureHand;