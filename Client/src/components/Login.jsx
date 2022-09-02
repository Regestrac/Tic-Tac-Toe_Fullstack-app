import React, { useState } from 'react'
import './Login.css';
import Axios from "axios";
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';

const Login = () => {
  const cookies = new Cookies();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const login =()=>{
      Axios.post("http://localhost:3001/login", username, password).then(res =>{
        const {token, fullName, username, user_id} = res.data;
        cookies.set("token", token);
        cookies.set("user_id", user_id);
        cookies.set("username", username);
        cookies.set("fullName", fullName);
      })
    }
  return (
    <div className="login-form">
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
  )
}

export default Login