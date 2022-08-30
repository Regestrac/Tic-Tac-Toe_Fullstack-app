import React from 'react'
import './Game.css'
import Board from './Board'

const Game = () => {
  const boxes = ["O","X","O","X","X","O","O","X","X",]
  return (
    <div className='game'>
        <h2>Tic Tac Toe</h2>
        <Board boxes={boxes} onClick={null} />
    </div>
  )
}

export default Game