import React from 'react';
import './ResetBtn.css'

const ResetBtn = ({resetBoard}) => {
  return (
    <div className='reset-btn'>
        <button className='reset' onClick={()=> resetBoard()}>Reset</button>
    </div>
  )
}

export default ResetBtn