import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './joinGame.css'

const JoinGame = ({socket}) => {
  const [username, setUsername] = useState("")
  const [gameId, setGameId] = useState("")
  const [invalidCode, setInvalidCode] = useState(false)
  const navigate = useNavigate();

  const joinGame =(e)=>{
    if(username !== "" && gameId !== ""){
      socket.emit("join_game", gameId,username)
      navigate('/match')
    }else{
      e.preventDefault();
      alert("Please Enter username & game ID to continue...");
    }

    socket.on("invalid_code", ()=>{
      setInvalidCode(true)
    })

    socket.on("valid_code",(data)=>{
      console.log(data)
    })
  } 

    return (
      <>
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
          <button className='sub-btn' type="submit" onClick={joinGame} >Join</button>
        </div>
      </form>
    </div>
      {invalidCode &&
      <div className='invalid'>
        <h1>The code you entered is Invalid, Please try again.!</h1>
        <button className='retry-btn' onClick={()=>setInvalidCode(false)} >RETRY</button>
      </div>}
      </>
    )
}

export default JoinGame