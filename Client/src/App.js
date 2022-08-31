import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import Login from "./components/Login";
import OnlineMatch from "./components/OnlineMatch";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />             {/* Route for the Home page */}
          <Route path='/offline-game' element={<Game />} />       {/* Route for the game page */}
          <Route path='/online-match' element={<OnlineMatch />} />    {/* Route for the online match page */}
          <Route path='/signup' element={<Signup />} />    {/* Route for the Signup page */}
          <Route path='/login' element={<Login />} />    {/* Route for the Login page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
