import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
            <p className='age-time'>For Age: {age} year</p>
            <p className='age-time'>Time required: {time} Minite</p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => addToTime(props.player)} className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Player;