import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './CreateGame.css'

const CreateGame = ({socket}) => {
    const [username, setUsername] = useState("")
  
    const createRoomAndJoin = (e) => {
      if(username !== ""){
        socket.emit("create_game", username)
      }else{
        e.preventDefault();
        alert("Plese enter a Username to continue...")
      }
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

export default CreateGame