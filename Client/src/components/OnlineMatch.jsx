import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CreateRoom from './CreateGame'
import JoinGame from './JoinGame'
import './OnlineMatch.css'

const OnlineMatch = ({ isAuth, socket}) => {
  isAuth = false;
  const [createGame, setCreateGame] = useState(false);
  const [joinGame, setJoinGame] = useState(false);
  const showCreateForm =(e)=>{
    e.preventDefault();
    setCreateGame(true);
    setJoinGame(false);
  }
  const showJoinForm =(e)=>{
    e.preventDefault();
    setJoinGame(true);
    setCreateGame(false);
  }
  let formRef = useRef();
  useEffect(() =>{
    document.addEventListener("mousedown", (event)=>{
      if(!formRef.current.contains(event.target)){
        setCreateGame(false);
        setJoinGame(false);
      }
    })
  })
  return (
      <div className='online-match' >
        <h2>Tic Tac Toe</h2>
        <div className='join-forms'>
          <h1>Please create a session to Continue !</h1>
          <button className='create-btns' onClick={showCreateForm} >Create Game</button>
          {createGame && 
          <div ref={formRef} className='crete-game'>
          <CreateRoom />
          </div>}
          <button className='create-btns' onClick={showJoinForm} >Join Game</button>
         {joinGame &&
          <div ref={formRef} className='join-game'>
            <JoinGame />
          </div>}
        </div>
      </div>
  )
}

export default OnlineMatch