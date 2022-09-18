import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const JoinGame = ({socket}) => {
  const [username, setUsername] = useState("")
  const [gameId, setGameId] = useState("")
    return (
      <div className="login-form">
      <Link to='/' ><button className='home-btn' >Home</button></Link>
      <h2>JOIN GAME</h2>
      <form>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="userName" required autoComplete='off'
            onChange={(e) => setUsername(e.target.value)} />
          <label>Game ID</label>
          <input type="text" name="userName" required autoComplete='off'
            onChange={(e) => setGameId(e.target.value)} />
        </div>
        <div className="button-container">
          <button className='sub-btn' type="submit"  >Join</button>
        </div>
      </form>
    </div>
    )
}

export default JoinGame