import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub,FaTwitter,FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <h1>Crypto<span className='primary'>Track</span></h1>
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Chat</a>
            </div>
          
            <div className='col'>
                <h5>Social</h5>
                <span className='bar'></span>
                    <a href='https://www.facebook.com/'><FaFacebook className='icons' /> </a>
                    <a href='https://twitter.com/home'><FaTwitter className='icons' /> </a>
                    <a href='https://github.com/deepak15011998'><FaGithub className='icons' /> </a>
                    <a href='https://www.linkedin.com/feed/'><FaLinkedinIn className='icons' /> </a>
                
            </div>
        </div>

    </div>
  )
}

export default Footer;