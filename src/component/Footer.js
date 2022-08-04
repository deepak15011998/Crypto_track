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
                <h5>Social</h5>
                <span className='bar'></span>
                    <a href='https://www.facebook.com/profile.php?id=100003655111863t/'><FaFacebook className='icons' /> </a>
                    <a href='https://twitter.com/DeepakS55008263'><FaTwitter className='icons' /> </a>
                    <a href='https://github.com/deepak15011998'><FaGithub className='icons' /> </a>
                    <a href='https://www.linkedin.com/in/deepak-singh-7a8628190/'><FaLinkedinIn className='icons' /> </a>
                
            </div>
        </div>

    </div>
  )
}

export default Footer;
