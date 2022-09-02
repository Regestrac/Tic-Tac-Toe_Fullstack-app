import React, { useState } from 'react'
import './Login.css';
import Axios from "axios";
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';

const Login = ({setIsAuth, isAuth, logOut}) => {
    const cookies = new Cookies();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const login =(e)=>{
      e.preventDefault()
      Axios.post("http://localhost:3001/login",{ username, password}).then(res =>{
        const {token, fullName, username, user_id} = res.data;
        cookies.set("token", token);
        cookies.set("fullName", fullName);
        cookies.set("username", username);
        cookies.set("user_id", user_id);
        setIsAuth(true)
      })
    }
    
  return (
    <>
    {!isAuth ? (
      <div className="login-form">
      <Link to='/' ><button>Home</button></Link>
        <h2>LOGIN</h2>
        <form>
        <div className="input-container">
        <label>Username </label>
        <input type="text" name="userName" required
        onChange={(e)=> setUsername(e.target.value)} />
        </div>
        <div className="input-container">
        <label>Password </label>
         <input type="password" name="password" required
         onChange={(e)=> setPassword(e.target.value)} />
         </div>
         <div className="button-container">
         <input type="submit" onClick={login} />
         </div>
         </form>
         <div className='link-box'>
         <Link to='/signup' className='Link'>Looking for Signup?</Link>
         </div>
         </div>
         ):
         <div className='logout-card'>
          <h2>You are Logged in!</h2>
          <button className='logout-btn' onClick={logOut}>Logout</button>
        </div>}
         </>
  )
}

export default Login
