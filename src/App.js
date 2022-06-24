import logo from "./logo.svg";
import "./App.css";
import { Grommet } from "grommet";
import { Route, Router } from "react-router";
import MainGame from "./pages/MainGame";
import PreGame from "./pages/PreGame";

const theme = {
  global: {},
};

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Route to="/start" element={<PreGame />} />
        <Route to="/play" element={<MainGame />} />
      </Router>
    </Grommet>
  );
}

export default App;
