import React from 'react';
import './ResetBtn.css'

const ResetBtn = ({setBoxes, setPlayerX}) => {
    const handleReset =()=>{
        setBoxes(Array(9).fill(null));         //This sets the board with null values
        setPlayerX(true)
    }
  return (
    <div className='reset-btn'>
        <button className='reset' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetBtn