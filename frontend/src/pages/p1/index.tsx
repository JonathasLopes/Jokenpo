import React from 'react';
import './styles.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Table from '../../components/table';
import Gestures from '../../components/gestureHand';
import Scoreboard from '../../components/scoreboard';

function P1() {
    const history = useHistory();

    function cancel(){
        history.push("/");
    }

    return (
        <div className="container">
            <button onClick={cancel} className="goBack">
                <FaArrowLeft size={50} style={{transition: "0.2s"}} className="back" />
            </button>
            <div className="bot">

            </div>
            <Table />
            <Scoreboard />
            <Gestures />
        </div>
    );
}

export default P1;