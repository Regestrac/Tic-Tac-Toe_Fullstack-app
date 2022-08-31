import React from 'react'
import './Board.css'

const Board = ({ boxes, onClick }) => {  //props coming from Game.jsx

  return (
      <div className='board'>
        <div className='rows'>
          {boxes.map((value, index) => {   // Iterating through the 'boxes' prop
            const style = value === "X" ? "box X" : "box O";    //Giving a style depending on the value
            return (
              <div className={style} value={value} onClick={() => value === null && onClick(index)} key={index}>{value}</div>  //making a div with the value from the 'boxes'
            )
          })}
        </div>
      </div>
  )
}

export default Board