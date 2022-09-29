import React, { useState } from 'react';
import './Calculation.css'
import image from './player-3.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculation = (props) => {
    const [breakTime, setBreakTime] = useState(0);
    const {time} = props;
    let newminite = 0;
    for(const minite of time){
        newminite += minite.time;
    }

    const diftToast = () => {
        toast.success("Thank you for visite my website",
        {position:"top-center"});
    }

    const breakTimeAdd = (min) =>{
        setBreakTime(min);
    }

    return (
        <div className='cart'>
                <div className='image-section'>
                <img className='image' src={image} alt=""/>
                <div>
                    <h2>Nazmul Bhuyian</h2>
                    <address>Noakhali, Bangladesh</address>
                </div>
                </div>
            <div className='meserment'>
                <div className='height'>
                    <h4>65 KG</h4>
                    <p>Weight</p>
                </div>
                <div className='height'>
                    <h4>6.5 inc</h4>
                    <p>Height</p>
                </div>
                <div className='height'>
                    <h4>25 yrs</h4>
                    <p>Years</p>
                </div>
            </div>

            <h1>Add A Break</h1>
            <div className='time'>
                <p onClick={() => breakTimeAdd(10)} href="/a">10 M</p>
                <p onClick={() => breakTimeAdd(20)} href="/a">20 M</p>
                <p onClick={() => breakTimeAdd(30)} href="/a">30 M</p>
                <p onClick={() => breakTimeAdd(40)} href="/a">40 M</p>
                <p onClick={() => breakTimeAdd(50)} href="/a">50 M</p>
            </div>

            <h1>Exercise Details</h1>
            <h3 className='exercise-time'>Exercise time: {newminite} M</h3>
            <h3 className='exercise-time'>Break time: {breakTime} S</h3>
            <button onClick={diftToast} className='complete'>Activity Complete <ToastContainer /></button>

        </div>
    );
};

export default Calculation;