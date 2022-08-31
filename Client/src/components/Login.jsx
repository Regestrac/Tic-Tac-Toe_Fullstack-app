import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const login =()=>{

    }
  return (
    <div className="login-form">
        <h2>LOGIN</h2>
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required
         onChange={(e)=> setUsername(e.target.value)} />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required
         onChange={(e)=> setPassword(e.target.value)} />
       </div>
       <div className="button-container">
         <input type="submit" onClick={login} />
       </div>
     </form>
   </div>
  )
}

export default Login