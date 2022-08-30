import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import OnlineMatch from "./components/OnlineMatch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/offline-game' element={<Game />} />
          <Route path='/online-match' element={<OnlineMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
