import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({setIsAuth}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const signup = (e) => {
    e.preventDefault()
      setIsAuth(true);
    navigate('/login')
  }
  return (
    <div className="signup-form">
      <Link to='/' ><button className='home-btn' >Home</button></Link>
      <h2>SIGNUP</h2>
      <form>
        <div className="input-container">
          <label>Full Name</label>
          <input type="text" name="fullNmae" required
            onChange={(e) => setUser({ ...user, fullName: e.target.value })} />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="userName" required
            onChange={(e) => setUser({ ...user, username: e.target.value })} />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required
            onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
        <div className="button-container">
          <input type="submit" onClick={signup} />
        </div>
      </form>
      <div className='link-box'>
        <Link to='/login' className='Link'>Looking for Login?</Link>
      </div>
    </div>
  )
}

export default Signup