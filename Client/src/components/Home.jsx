import React from 'react';
import './Home.css'
import Logo from '../assets/Logo.png'
import { useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='home'>
        <div className='head'>
            <h2>TIC TAC TOE</h2>
            <img className='logo' src={Logo} alt="Logo" />
        </div>
        <div className='btns'>
            <button className='btn' onClick={() => navigate('/offline-game')}>Play Offline</button>
            <button className='btn' onClick={() => navigate('/online-match')}>Play Online</button>
        </div>
        <div className='auth'>
            <button className='auth-btn'>Login</button>
            <button className='auth-btn'>Signup</button>
        </div>
    </div>
  )
}

export default Home