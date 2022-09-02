import React, { useState } from 'react'
import './Signup.css'
import Axios from "axios"
import Cookies from "universal-cookie"
import { Link } from 'react-router-dom'

const Signup = ({setIsAuth}) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null)

  const signup = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3001/signup", user).then(res => {
      const { token, user_id, fullName, username, email, hashedPassword } = res.data;
      cookies.set("token", token);
      cookies.set("user_id", user_id);
      cookies.set("fullName", fullName);
      cookies.set("username", username);
      cookies.set("email", email);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true);
    })
  }
  return (
    <div className="signup-form">
      <Link to='/' ><button>Home</button></Link>
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
          <label>Email </label>
          <input type="email" name="email" required
            onChange={(e) => setUser({ ...user, email: e.target.value })} />
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