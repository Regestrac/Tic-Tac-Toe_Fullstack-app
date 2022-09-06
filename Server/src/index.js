const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket)=>{
    console.log("user connected:",socket.id);

    socket.on("join_game", (data)=>{
        socket.join(data)
        console.log(`user with ID: ${socket.id} joined with data: ${data}`)
    })

    socket.on("game_stats", (data)=>{
        console.log(data)
    })

    socket.on("disconnect", ()=>{
        console.log("user disconnected", socket.id);
    })
})

server.listen(3001, ()=>{
    console.log("server at 3001...");
})









// import express from "express";
// import cors from "cors";
// import { v4 as uuidv4 } from "uuid";
// import bcrypt from "bcrypt";
// import { StreamChat } from 'stream-chat'

// const app = express();

// app.use(cors());
// app.use(express.json());

// const api_key = 'nj9tdu6hk867'
// const api_secret = '6vk5284vmjcdsu242zfphe82cyvz6y2r3aheqh6ww9rzejgb2e5fmpgpsvs6qb56'
// const serverClient = StreamChat.getInstance(api_key, api_secret)

// app.post('/signup', async (req, res) => {
//     try {
//         const { fullName, username, password } = req.body;
//         const user_id = uuidv4();
//         const hashedPassword = await bcrypt.hash(password, 10)
//         const token = serverClient.createToken(user_id)
//         res.json({ token, user_id, fullName, username, hashedPassword });
//     } catch (error) {
//         res.json(error);
//         console.log(error);
//     }
// });

// app.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body
//         const { users } = await serverClient.queryUsers({ name: username });
//         if (users.length === 0) {return res.json({ message: "User not found" });}
//         const token = serverClient.createToken(users[0].id)
//         const passwordMatch = await bcrypt.compare(password, users[0].hashedPassword);
//         if (passwordMatch) {
//             res.json({ token, fullName: users[0].fullName, username, user_id: users[0].id });
//         }

//     } catch (error) {
//         res.json(error);
//         console.log(error);
//     }
// })

// app.listen(3001, () => {
//     console.log("Server started at port 3001");
// })
