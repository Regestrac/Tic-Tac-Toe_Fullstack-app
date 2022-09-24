import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import OnlineMatch from "./components/OnlineMatch";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route exact path='/' element={<Home />} />   {/* Route for the Home page */}
          <Route path='/offline-game' element={<Game />} />             {/* Route for the game page */}
          <Route path='/online-match' element={<OnlineMatch />} />      {/* Route for the online match page */}          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
