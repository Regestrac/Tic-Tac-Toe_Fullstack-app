import React, { useState } from 'react'
import './Game.css'
import Board from './Board'

const Game = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));   //setting box values as null at begining
  const [playerX, setPlayerX] = useState(true)               //setting playerX status as true at begining
  const handleBoxClick = (boxIndex) =>{                      //This gets the index of clicked box from Board.jsx
    const updatedBox = boxes.map((value, index)=>{     //Iterating through each box to check the value and index
      if(index === boxIndex){                          //Checking if the indexes of the box and the Click match
        return playerX === true ? "X" : "O";           //Returning the value depending on the player
      }else{
        return value;                                  //Returns the previous value of all other boxes
      }
    })
    setBoxes(updatedBox);        //updating box value on each click
    setPlayerX(!playerX);        //updating playerX status on each click
  }
  return (
    <div className='game'>
        <h2>Tic Tac Toe</h2>
        <Board boxes={boxes} onClick={handleBoxClick} />         {/* Passing the data to Board.jsx */}
    </div>
  )
}

export default Game