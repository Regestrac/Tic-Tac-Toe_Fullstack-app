import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import JoinGame from './JoinGame'

const OnlineMatch = ({ isAuth, socket}) => {
  isAuth = true;
  const [joinInput, setJoinInput] = useState(false)
  // const [joinNewGame, setJoinNewGame] = useState(false)
  const [gameId, setGameId] = useState("");
  const [startGame, setStartGame] = useState(false);
  const joinGame = () => {
    if(joinInput && gameId !== ""){
      socket.emit("join_game", gameId)
      setStartGame(true)
    }
  }
  // const createGame = () => {

  // }
  return (
    <>
      <div style={{ height: "50vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h2>Tic Tac Toe</h2>
      </div>
      {!isAuth ? (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <h2>Tic Tac Toe</h2>
          <h1>Please create a session to Continue !</h1>
          <button><Link to='/login' >Login</Link></button>
        </div>
      ) : (
        <div style={{ height: "50vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <div>
                {/* <button onClick={createGame}>Create Game</button><br /> */}
                <button onClick={()=>setJoinInput(true)}>Join Game</button><br />
                {joinInput  &&
                  <>
                    <input placeholder='Enter Room Id...' onChange={(e) => { setGameId(e.target.value) }} ></input>
                    <button onClick={joinGame} >Join Game</button>
                  </>}
            <br />
            {gameId !== "" && startGame &&
              <>
                <div>
                  <JoinGame socket={socket} />
                </div>
              </>}
          </div>
        </div>
      )}
    </>
  )
}

export default OnlineMatch