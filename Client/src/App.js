import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import Match from "./components/Match";
import OnlineMatch from "./components/OnlineMatch";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<Home />} />   {/* Route for the Home page */}
          <Route path='/offline-game' element={<Game />} />             {/* Route for the game page */}
          <Route path='/online-match' element={<OnlineMatch />} />      {/* Route for the online match page */}          
          <Route path='/match' element={<Match />} />      {/* Route for the online match page */}          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
