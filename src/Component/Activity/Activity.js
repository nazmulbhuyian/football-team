import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Player from '../Player/Player';
import './Activity.css'

const Activity = () => {
    const [players, setPlayers] = useState([]);
    const [time, setTime] = useState([])
    useEffect(()=>{
        fetch('catagory.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    const addToTime = (player) =>{
        const newTime = [...time, player];
        setTime(newTime);
    }

    return (
        <div className='main-section'>
            <div className="players">
            {
                players.map(player => <Player key={player.id} player={player} addToTime={addToTime}></Player>)
            }
            </div>
            <div className="calculation">
                <Calculation time={time}></Calculation>
            </div>
        </div>
    );
};

export default Activity;