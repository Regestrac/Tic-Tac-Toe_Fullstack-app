import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import OnlineMatch from "./components/OnlineMatch";
import io from 'socket.io-client'
import CreateRoom from "./components/CreateRoom";
import JoinGame from "./components/JoinGame";

const socket = io.connect("http://localhost:3001")

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<Home />} />   {/* Route for the Home page */}
          <Route path='/offline-game' element={<Game />} />                             {/* Route for the game page */}
          <Route path='/online-match' element={<OnlineMatch  socket={socket} />} />      {/* Route for the online match page */}
          <Route path='/create-room' element={<CreateRoom  socket={socket} />} />      {/* Route for the online match page */}
          <Route path='/join-game' element={<JoinGame  socket={socket} />} />      {/* Route for the online match page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
