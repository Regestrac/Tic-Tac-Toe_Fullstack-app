import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './CreateGame.css'

const CreateRoom = ({setIsAuth}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
  
    const createRoomAndJoin = (e) => {
      e.preventDefault()
      e.username = username
      setIsAuth(true)
    }
  
    return (
          <div className="login-form">
            <Link to='/' ><button className='home-btn' >Home</button></Link>
            <h2>CREATE SESSION</h2>
            <form>
              <div className="input-container">
                <label>Username</label>
                <input type="text" name="userName" required autoComplete='off'
                  onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="button-container">
                <button className='sub-btn' type="submit" onClick={createRoomAndJoin} >Create &amp; Join</button>
              </div>
            </form>
          </div>
    )
}

export default CreateRoom