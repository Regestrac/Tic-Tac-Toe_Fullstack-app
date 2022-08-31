import React from 'react';
import './ScoreBoard.css'

const ScoreBoard = ({scores, playerX}) => {
  return (
    <div className='score-board'>
        <div className='scores'>
        <div className={`x-score ${!playerX && "inactive"}`}>
            <div>Player X</div>
            <div>{scores.scoreX}</div>
        </div>
        <div className={`o-score ${playerX && "inactive"}`}> 
            <div>Player O</div>
            <div>{scores.scoreO}</div>
        </div>
        </div>
    </div>
  )
}

export default ScoreBoard