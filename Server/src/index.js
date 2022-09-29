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
        origin: "*",
        methods : ["GET","POST"],
    }
})

var allGamesCodes = {}     //The code & session created for all games will be stored here for joining game parallel for different players

io.on("connection", (socket)=>{
    console.log("user connected:",socket.id);

    //Creating a session for player 1 to create a new game
    socket.on("create_game", (username)=>{
        var gameId = Math.floor(Math.random()*100000).toString();  //creating a random code for the game to create room
        console.log("player1:"+gameId)
        const session= new Session(username,gameId,socket);        // creating a new session for the created game
        allGamesCodes = {...allGamesCodes, [gameId]:session}       // updating & storing the code and session as object when a game is created
        socket.join(gameId)
        socket.emit("game_created", username,gameId )
    })

    //creating session for player 2 to join the game
    socket.on("join_game", (gameId,username)=>{
        socket.join(gameId)
        console.log("player2:"+gameId)
        if(allGamesCodes[gameId] === undefined){    //Check for the code entered by 2nd player
            socket.emit("invalid_code")             
        }else{
            allGamesCodes[gameId].JoinGame(username,socket);
            allGamesCodes[gameId].sendToBoth("valid_code", allGamesCodes[gameId].gameStats);
        }
    })

    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id);
    })
})

server.listen(process.env.PORT || 7000, ()=>{
    console.log("server started at 7000...");
})
