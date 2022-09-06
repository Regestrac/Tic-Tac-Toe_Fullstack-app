import React, { useState } from 'react'
import Board from './Board'
import ScoreBoard from './ScoreBoard'

const JoinGame = () => {
    
    return (
        <div className='join-game'>
            {/* <Game /> */}
            <ScoreBoard  />
            <Board/>
        </div>
    )
}

export default JoinGame