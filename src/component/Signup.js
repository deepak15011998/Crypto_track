import React from 'react';
import './signup.css';
import Crypto from '../asset/trade.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='signup'>
        <div className='container'>
            {/* {left} */}
            <div className='left'>
                <img src={Crypto} alt=' ' />
            </div>
            {/* {right } */}
            <div className='right'>
                <h2>Earn passive income with crypto.</h2>
                <p>Earn upto 12% annual digital rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                <div className='input-container'>
                    {/* <input type='email' placeholder='Enter your email '/> */}
                    <Link to="./show">
                    <button className='btn' >Learn More</button>
                    </Link>
                    </div>         
            </div>
        </div>

    </div>
  )
}

export default Signup