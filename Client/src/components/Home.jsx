import React from 'react';
import './Home.css'
import Logo from '../assets/Logo.png'
import { useNavigate} from 'react-router-dom'

const Home = ({logOut, isAuth}) => {
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
            {!isAuth && <button className='auth-btn' onClick={() => navigate('/login')}>Login</button>}     {/* navigates to the Login page */}
            {!isAuth && <button className='auth-btn' onClick={() => navigate('/signup')}>Signup</button>}    {/* navigates to the SignUp page */}
            {isAuth && <button className='auth-btn' onClick={logOut}>Logout</button>}    {/* navigates to the SignUp page */}
        </div> 
    </div>
  )
}

export default Home