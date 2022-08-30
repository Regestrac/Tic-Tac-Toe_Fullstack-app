import React from 'react';
import './Home.css'
import Logo from '../assets/Logo.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='head'>
            <h2>TIC TAC TOE</h2>
            <img className='logo' src={Logo} alt="Logo" />
        </div>
        <div className='btns'>
            <button className='btn'>Play Offline</button>
            <button className='btn'>Play Online</button>
        </div>
        <div className='auth'>
            <button className='auth-btn'>Login</button>
            <button className='auth-btn'>Signup</button>
        </div>
    </div>
  )
}

export default Home