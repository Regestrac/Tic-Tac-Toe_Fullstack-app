import { useState } from 'react';
import './Game.css';
import Board from './Board';
import ScoreBoard from './ScoreBoard';
import ResetBtn from './ResetBtn';
import { Link } from 'react-router-dom';

const Game = () => {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]        //These are the possible win conditions
  ]

  const [boxes, setBoxes] = useState(Array(9).fill(null));   //setting box values as null at begining
  const [playerX, setPlayerX] = useState(true)               //setting playerX status as true at begining
  const [scores, setScores] = useState({ scoreX: 0, scoreO: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [winPlayer, setWinPlayer] = useState(null)

  const handleBoxClick = (boxIndex) => {                      //This gets the index of clicked box from Board.jsx
    const updatedBox = boxes.map((value, index) => {     //Iterating through each box to check the value and index
      if (index === boxIndex) {                          //Checking if the indexes of the box and the Click match
        return playerX === true ? "X" : "O";           //Returning the value depending on the player
      } else {
        return value;                                  //Returns the previous value of all other boxes
      }
    })
    const winner = checkWinner(updatedBox)      //checks for winner in the updated box values

    if (winner) {
      if (winner === "O") {
        let { scoreO } = scores;
        scoreO += 1;                          //updates score if O won
        setScores({ ...scores, scoreO });
        setWinPlayer("O")
      } else if (winner === "X") {
        let { scoreX } = scores;
        scoreX += 1;                         //updates score if X won
        setScores({ ...scores, scoreX });
        setWinPlayer("X")
      }
    }
    setBoxes(updatedBox);        //updating box value on each click
    setPlayerX(!playerX);        //updating playerX status on each click

    const checkDraw = (array) => {
      array.every(e => e != null) && setWinPlayer("Draw")
    }
    checkDraw(updatedBox)
  }

  const checkWinner = (boxes) => {                   //checks for winner
    for (let i = 0; i < winConditions.length; i++) {    //loops through the winconditions
      const [x, y, z] = winConditions[i];
      if (boxes[x] && boxes[x] === boxes[y] && boxes[y] === boxes[z]) {     //checks if the condition satisfies with same value
        setGameOver(true)
        return boxes[x];
      }
    }
  }

  const resetBoard = () => {            //Reset the board for new game
    setGameOver(false)
    setBoxes(Array(9).fill(null))
    setPlayerX(true)
    setWinPlayer(null)
  }

  return (
    <div className='game'>
      <Link to='/' ><button className='home-btn'>Home</button></Link>
      <h2>TIC TAC TOE</h2>
      <ScoreBoard scores={scores} playerX={playerX} />
      <Board boxes={boxes} onClick={gameOver ? resetBoard : handleBoxClick} winPlayer={winPlayer} setWinPlayer={setWinPlayer} resetBoard={resetBoard} />   {/* Passing the data to Board.jsx */}
      <ResetBtn resetBoard={resetBoard} />
    </div>
  )
}

export default Game