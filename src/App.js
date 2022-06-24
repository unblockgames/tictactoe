import React from "react";
import "./App.css";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainGame from "./pages/MainGame";
import LandingPage from "./pages/LandingPage";
import PlayerContext from "./contexts/PlayerContext";

const theme = {
  global: {},
};

const App = () => {
  const [players, setPlayers] = React.useState();

  return (
    <Grommet theme={theme}>
      <PlayerContext.Provider
        value={{ players: players, setPlayers: setPlayers }}
      >
        <Router>
          <Routes>
            <Route path="/play" element={<MainGame />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </PlayerContext.Provider>
    </Grommet>
  );
};

export default App;
