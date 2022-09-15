import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './OnlineMatch.css'

const OnlineMatch = ({ isAuth, socket}) => {
  isAuth = false;
  const [joinInput, setJoinInput] = useState(false)
  const [gameId, setGameId] = useState("");
  const [startGame, setStartGame] = useState(false);
  const joinGame = () => {
    if(joinInput && gameId !== ""){
      socket.emit("join_game", gameId)
      setStartGame(true)
    }
  }
  return (
      <div className='online-match' >
        <h2>Tic Tac Toe</h2>
        <div className='join-forms'>
          <h1>Please create a session to Continue !</h1>
          <button><Link to='/create-room' >Create Game</Link></button>
          <button><Link to='/join-game'>Join Game</Link></button>
        </div>
      </div>
  )
}

export default OnlineMatch