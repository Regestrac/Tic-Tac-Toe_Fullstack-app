import React, { useState } from 'react'
import './Game.css'
import Board from './Board'

const Game = () => {
  const winConditions = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]

  const [boxes, setBoxes] = useState(Array(9).fill(null));   //setting box values as null at begining
  const [playerX, setPlayerX] = useState(true)               //setting playerX status as true at begining
  const [scores, setScores] = useState({Xscore:0, Oscore:0})

  const handleBoxClick = (boxIndex) =>{                      //This gets the index of clicked box from Board.jsx
    const updatedBox = boxes.map((value, index)=>{     //Iterating through each box to check the value and index
      if(index === boxIndex){                          //Checking if the indexes of the box and the Click match
        return playerX === true ? "X" : "O";           //Returning the value depending on the player
      }else{
        return value;                                  //Returns the previous value of all other boxes
      }
    })
    const winner = checkWinner(updatedBox)
    if(winner){
      if(winner === "O"){
        let {Oscore} = scores;
        Oscore += 1;
        setScores({...scores,Oscore});
      }else{
        let {Xscore} = scores;
        Xscore += 1;
        setScores({...scores,Xscore});
      }
    }
    console.log(scores);
    setBoxes(updatedBox);        //updating box value on each click
    setPlayerX(!playerX);        //updating playerX status on each click
  }

  const checkWinner = (boxes) =>{
    for(let i=0; i < winConditions.length; i++){
      const [x,y,z] = winConditions[i];
      if(boxes[x] && boxes[x] === boxes[y] && boxes[y] === boxes[z]){
        return boxes[x];
      }
    }
  }

  return (
    <div className='game'>
        <h2>Tic Tac Toe</h2>
        <Board boxes={boxes} onClick={handleBoxClick} />         {/* Passing the data to Board.jsx */}
    </div>
  )
}

export default Game