import React, { useState } from 'react'
import './Signup.css'
import Axios from "axios"
import Cookies from "universal-cookie"

const Signup = () => {
    const cookies = new Cookies();
    const [user,setUser] = useState("")
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const signup =()=>{
      Axios.post("http://localhost:3001/signup", user).then(res =>{
        const {token, hashedPassword, fullName, username, email, user_id} = res.data;
        cookies.set("token", token);
        cookies.set("user_id", user_id);
        cookies.set("username", username);
        cookies.set("fullName", fullName);
        cookies.set("hashedPassword", hashedPassword);
        cookies.set("email", email);
      })
    }
  return (
    <div className="signup-form">
        <h2>SIGNUP</h2>
     <form>
       <div className="input-container">
         <label>Full Name</label>
         <input type="text" name="fullNmae" required 
         onChange={(e)=> setUser(...user, e.target.value)} />
       </div>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="userName" required
         onChange={(e)=> setUsername(...username, e.target.value)} />
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="email" required
         onChange={(e)=> setEmail(...email, e.target.value)} />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required
         onChange={(e)=> setPassword(...password, e.target.value)} />
       </div>
       <div className="button-container">
         <input type="submit" onClick={signup} />
       </div>
     </form>
   </div>
  )
}

export default Signup