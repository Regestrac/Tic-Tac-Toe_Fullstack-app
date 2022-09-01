import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import OnlineMatch from "./components/OnlineMatch";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cookies from "universal-cookie";
import { StreamChat } from 'stream-chat'

function App() {
  const cookies = new Cookies();
  const token = cookies.get("token")
  const api_key = process.env.API_KEY
  const client = StreamChat.getInstance(api_key)

  if (token) {
    client.connectUser({
      id: cookies.get("user_id"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      email: cookies.get("email"),
      hashedPassword: cookies.get("hashedPassword")
    }, token).then((user) => {
      console.log(user)
    })
  
  }

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
