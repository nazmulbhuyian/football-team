import React from 'react';
import './Calculation.css'
import image from './player-3.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculation = (props) => {
    const {time} = props;
    let newminite = 0;
    for(const minite of time){
        newminite += minite.time;
    }

    const diftToast = () => {
        toast.success("Thank you for visite my website",
        {position:"top-center"});
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
                <a href="/a">10</a>
                <a href="/a">20</a>
                <a href="/a">30</a>
                <a href="/a">40</a>
                <a href="/a">50</a>
            </div>

            <h1>Exercise Details</h1>
            <h3 className='exercise-time'>Exercise time: {newminite} M</h3>
            <h3 className='exercise-time'>Break time: 0</h3>
            <button onClick={diftToast} className='complete'>Activity Complete <ToastContainer /></button>

        </div>
    );
};

export default Calculation;