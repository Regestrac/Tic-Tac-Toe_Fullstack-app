const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

const Session = require('./Sessions');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

var allGamesCodes = {}

io.on("connection", (socket)=>{
    console.log("user connected:",socket.id);

    socket.on("create_game", (username)=>{
        var gameId = Math.floor(Math.random()*100000).toString();
        console.log(gameId)
        const session= new Session(username,gameId,socket);
        console.log(session)
        allGamesCodes = {...allGamesCodes, [gameId]:session}
        console.log(allGamesCodes)
        socket.emit("game_created", username,gameId )
    })

    socket.on("join_game", (gameId,username)=>{
        socket.join(gameId)
        console.log(gameId)
        if(allGamesCodes[gameId] === undefined){
            socket.emit("invalid_code")
        }else{
            socket.to(gameId.toString()).emit("valid_code", "Joined Game")
        }
    })

    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id);
    })
})

server.listen(3001, ()=>{
    console.log("server at 3001...");
})
