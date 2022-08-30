import React from 'react'
import './Board.css'

const Board = ({ boxes, onClick }) => {

  return (
    <div className='board'>
      <div className='rows'>
        {boxes.map((value, idx) => {
          const style = value === "X" ? "box X" : "box O";
          return (
            <div className={style} value={value} onClick={() => onClick} key={idx}>{value}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Board