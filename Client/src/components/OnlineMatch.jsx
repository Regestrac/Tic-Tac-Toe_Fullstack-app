import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import JoinGame from './JoinGame'
import { Channel } from 'stream-chat'

const OnlineMatch = ({ isAuth, client }) => {
  console.log(Channel)
  const [joinNewGame, setJoinNewGame] = useState(false)
  const [roomId, setRoomId] = useState("")
  const [channel, setChannel] = useState(null)
  const joinGame = () => {
    setJoinNewGame(true)
  }
  const createGame = async () => {
    const response = await client.queryUsers({ name: { $eq: roomId } });
    if (response.users.length === 0) {
      alert("Room ID do not exist")
    }
    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id]
    })
    await newChannel.watch()
    setChannel(newChannel)
  }
  return (
    <>
      {!isAuth ? (
        <div style={{ height: "100vh", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <h2>Tic Tac Toe</h2>
          <h1>Please Login to Continue !</h1>
          <button><Link to='/login' >Login</Link></button>
        </div>
      ) : (
        <div>
          <div>
            {!joinNewGame && channel == null && <button onClick={joinGame}>Join Game</button>}<br />
            {joinNewGame && channel == null &&
              <>
                <input placeholder='Enter Room Id...' onChange={(e) => { setRoomId(e.target.value) }} ></input>
                <button onClick={createGame} >Join Game</button>
              </>}
            <br />
            {channel != null &&
              <>
                <div>
                  <Channel channel={channel}>
                    <JoinGame channel={channel} />
                  </Channel>
                </div>
              </>}
          </div>
        </div>
      )}
    </>
  )
}

export default OnlineMatch