import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import OnlineMatch from "./components/OnlineMatch";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(false)

  const logOut =(e)=>{
    e.preventDefault()
    setIsAuth(false)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<Home logOut={logOut} isAuth={isAuth} />} />   {/* Route for the Home page */}
          <Route path='/offline-game' element={<Game />} />                             {/* Route for the game page */}
          <Route path='/online-match' element={<OnlineMatch isAuth={isAuth} />} />      {/* Route for the online match page */}
          <Route path='/signup' element={<Signup setIsAuth={setIsAuth} />} />           {/* Route for the Signup page */}
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />             {/* Route for the Login page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
