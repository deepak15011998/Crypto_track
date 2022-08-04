import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Navbar.css"
const Navbar = () => {
   const[click,setClick]=useState(false);
    const handleclick=() =>setClick(!click);
  return (
    <div className='header'>
     <div className='container'>
        <h1>Crypto<span className='primary'>Track</span></h1>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='./show'>Featured</a>
            </li>
        </ul>
        {/* <div className='btn-group'>
            <button className='btn'>Connect wallet</button>
        </div> */}
        <div className='hamburger' onClick={handleclick}>
           {
            click ? (<FaTimes size={20} style={{color:'#333'}} />): (<FaBars size={20} style={{color:'#333'}}  /> )
           }
            
        </div>
        </div>   
        </div>
  )
}

export default Navbar
