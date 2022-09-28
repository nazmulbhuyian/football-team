import React from 'react';
import './Player.css'

const Player = (props) => {
    // console.log(props)
    const {name, img, age, time, title} = props.player;
    const {addToTime} = props;
    return (
        <div className='player'>
            <img src={img} alt=""/>
            <div className='player-info'>
            <p className='name'>{name}</p>
            <p>{title}</p>
            <p>For Age: {age} year</p>
            <p>Time required: {time} Minite</p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => addToTime(props.player)} className='btn-text'>Add To Cart</p>
            </button>
        </div>
    );
};

export default Player;