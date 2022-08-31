import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className="signup-form">
     <form>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="uname" required />
       </div>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>
  )
}

export default Signup