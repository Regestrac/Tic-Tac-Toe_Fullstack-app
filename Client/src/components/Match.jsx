import React from 'react'

const Match = ({socket}) => {

    socket.on("valid_code", (gameStats)=>{
        console.log('gameStats:::')
        console.log(gameStats)
    })
  return (
    <div>Match</div>
  )
}

export default Match