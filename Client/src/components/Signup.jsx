import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
    const [user,setUser] = useState(null)
    const [username,setUsername] = useState(null)
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    const signup =()=>{

    }
  return (
    <div className="signup-form">
        <h2>SIGNUP</h2>
     <form>
       <div className="input-container">
         <label>Full Name</label>
         <input type="email" name="uname" required 
         onChange={(e)=> setUser(...user, e.target.value)} />
       </div>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required
         onChange={(e)=> setUsername(...username, e.target.value)} />
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="uname" required
         onChange={(e)=> setEmail(...email, e.target.value)} />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required
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