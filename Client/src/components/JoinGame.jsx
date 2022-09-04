import React from 'react'
import { useState } from 'react'
import Game from './Game'
// import Board from './Board'
// import ResetBtn from './ResetBtn'
// import ScoreBoard from './ScoreBoard'

const JoinGame = ({ channel }) => {
    const [playersJoined, setPlayersJoined] = useState(
        channel.state.Watcher_count === 2
    )
    channel.on("user.watch.start", (e) => {
        setPlayersJoined(e.Watcher_count === 2)
    })
    if (!playersJoined) {
        return <div>Waiting for Players to join</div>
    }
    return (
        <div className='join-game'>
            <Game />
            {/* <ScoreBoard />
            <Board />
            <ResetBtn /> */}
        </div>
    )
}

export default JoinGame