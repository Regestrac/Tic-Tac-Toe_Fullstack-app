import React from 'react'
import { Link } from 'react-router-dom'
import Game from './Game'

const OnlineMatch = ({isAuth}) => {
  return (
    <div>
      {isAuth ? (
    <div style={{height:"100vh", display:"flex", alignItems:"center", flexDirection:"column"}}>
       <h2>Tic Tac Toe</h2>
        <h1>Please Login to Continue !</h1>
        <button><Link to='/login' >Login</Link></button>
    </div>
      ):(
    <div>
      <Game />
    </div> )}
    </div>
  )
}

export default OnlineMatch