import React from 'react'
import './Hero.css'
import Pic from '../asset/hero-img.png'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* { left side } */}
            <div className='left'>
                <p>Buy & sell Crypto 24/7 using your retirement account </p>
                <h1>Invest in Cryptocurrency with your IRA</h1>
                <p>Buy,Sell,and store hundred of cryptocurrencies</p>
                <div className='input-container'>
                    {/* <input type='email' placeholder='Enter your email' /> */}
                    <Link to="./show">
                    <button className='btn' >Learn More</button>
                    </Link>
                   
                </div>
            </div>
            {/* {Right Side } */}
            <div className='right'>
              <div className='img-container'>
                <img src={Pic} alt=''/>
                </div>  
            </div>
        </div>

    </div>
  )
}

export default Hero