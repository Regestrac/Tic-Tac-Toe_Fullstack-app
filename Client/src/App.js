import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import OnlineMatch from "./components/OnlineMatch";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cookies from "universal-cookie";
import { StreamChat } from 'stream-chat'
import { useState } from "react";

function App() {
  const cookies = new Cookies();
  const token = cookies.get("token")
  const api_key = 'nj9tdu6hk867';
  const client = StreamChat.getInstance(api_key)
  const [isAuth, setIsAuth] = useState(false)

  if (token) {
    client.connectUser({
      id: cookies.get("user_id"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      email: cookies.get("email"),
      hashedPassword: cookies.get("hashedPassword")
    }, token).then((user) => {
      setIsAuth(true)
    })
  
  }
  const logOut =(e)=>{
    e.preventDefault()
    cookies.remove("token");
    cookies.remove("fullName");
    cookies.remove("username");
    cookies.remove("user_id");
    cookies.remove("email");
    cookies.remove("hashedPassword");
    client.disconnectUser();
    setIsAuth(false)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<Home />} />             {/* Route for the Home page */}
          <Route path='/offline-game' element={<Game />} />       {/* Route for the game page */}
          <Route path='/online-match' element={<OnlineMatch isAuth={isAuth} />} />    {/* Route for the online match page */}
          <Route path='/signup' element={<Signup setIsAuth={setIsAuth} />} />    {/* Route for the Signup page */}
          <Route path='/login' element={<Login setIsAuth={setIsAuth} isAuth={isAuth} logOut={logOut} />} />    {/* Route for the Login page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
