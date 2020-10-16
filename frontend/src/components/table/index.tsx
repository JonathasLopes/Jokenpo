import React from 'react';
import './styles.css';
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper } from 'react-icons/fa';

function Table(){
    return(
        <div className="table">
            <div className="playerHand1">
                <FaRegHandScissors size={150} />
            </div>
            <strong>VS</strong>
            <div className="playerHand2">
               <FaRegHandRock size={150}/>
            </div>
        </div>
    );
}

export default Table;