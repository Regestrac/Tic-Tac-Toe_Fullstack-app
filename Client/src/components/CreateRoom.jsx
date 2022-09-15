import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CreateRoom = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    const login = (e) => {
      e.preventDefault()
      e.username = username
      e.password = password
      setIsAuth(true)
      navigate('/')
    }
  
    return (
          <div className="login-form">
            <Link to='/' ><button className='home-btn' >Home</button></Link>
            <h2>LOGIN</h2>
            <form>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="userName" required
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="password" required
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="button-container">
                <input type="submit" onClick={login} />
              </div>
            </form>
            <div className='link-box'>
              <Link to='/signup' className='Link'>Looking for Signup?</Link>
            </div>
          </div>
    )
}

export default CreateRoom