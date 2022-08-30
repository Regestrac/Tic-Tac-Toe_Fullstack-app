import React from 'react'
import './Board.css'

const Board = () => {
  return (
    <div className='board'>
      <div className='rows'>
        <div className='box'>X</div>
        <div className='box'>X</div>
        <div className='box'>O</div>
        <div className='box'>X</div>
        <div className='box'>O</div>
        <div className='box'>X</div>
        <div className='box'>O</div>
        <div className='box'>X</div>
        <div className='box'>O</div>
      </div>
    </div>
  )
}

export default Board