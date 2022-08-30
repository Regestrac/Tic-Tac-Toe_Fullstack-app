import React from 'react';
import './Home.css'
import Logo from '../assets/Logo.png'
import { useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()   //Helps to navigate to new route
  return (
    <div className='home'>
        <div className='head'>
            <h2>TIC TAC TOE</h2>
            <img className='logo' src={Logo} alt="Logo" />   
        </div>
        <div className='btns'>
            <button className='btn' onClick={() => navigate('/offline-game')}>Play Offline</button>   {/* navigates to the game page */}
            <button className='btn' onClick={() => navigate('/online-match')}>Play Online</button>    {/* navigates to the online match page */}
        </div>
        <div className='auth'>
            <button className='auth-btn'>Login</button>     {/* navigates to the Login page */}
            <button className='auth-btn'>Signup</button>    {/* navigates to the SignUp page */}
        </div>
    </div>
  )
}

export default Home