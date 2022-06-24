import React from "react";
import { Box, Grid, Text, Button } from "grommet";
import { Close, Radial } from "grommet-icons";
import Scoreboard from "../components/Scoreboard";
import PlayerContext from "../contexts/PlayerContext";

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8],
];

const checkWin = (grid) => {
  let winner = false;
  WIN_CONDITIONS.forEach((condition) => {
    const winTest = [];
    condition.forEach((index) => {
      //build the array to check for win
      winTest.push(grid[index]);
    });
    if (
      winTest[0] !== "" &&
      winTest[0] === winTest[1] &&
      winTest[1] === winTest[2]
    )
      winner = winTest[0]; //WINNER!
  });
  return winner;
};

const initializeGrid = () => {
  const grid = new Array(9);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = "";
  }
  return grid;
};

const handleClick = (
  idx,
  grid,
  setGrid,
  player,
  setPlayer,
  score,
  setScore
) => {
  //If the tile hasnt been played yet
  if (grid[idx] === "")
    if (player === "X") {
      // if Player X
      grid[idx] = "X";
      setPlayer("O");
      //else Player O
    } else {
      grid[idx] = "O";
      setPlayer("X");
    }
  const winner = checkWin(grid);
  if (winner) {
    //reset board and log the win!
    console.log(winner);
    setGrid(initializeGrid());
    if (winner === "X") {
      score[winner] += 1;
      setScore(score);
    } else if (winner === "O") {
      score[winner] += 1;
      setScore(score);
    }
    return;
  }
  let fullIndicator = 0;
  for (let i = 0; i < 9; i++) {
    if (grid[i]) fullIndicator++;
  }
  console.log(fullIndicator);
  if (fullIndicator > 8) {
    //Stale mate reset game
    setGrid(initializeGrid());
    return;
  }
  setGrid(grid);
  return;
};

function MainGame(props) {
  const [grid, setGrid] = React.useState(initializeGrid());
  const [player, setPlayer] = React.useState("X");
  const [score, setScore] = React.useState({ X: 0, O: 0 });
  const players = React.useContext(PlayerContext);
  return (
    <Box align="center">
      <Scoreboard score={score} players={players} />
      <Box>
        <Grid
          rows={["small", "small", "small"]}
          columns={["small", "small", "small"]}
        >
          {grid.length > 0
            ? grid.map((tile, idx) => (
                <Box
                  onClick={() =>
                    handleClick(
                      idx,
                      grid,
                      setGrid,
                      player,
                      setPlayer,
                      score,
                      setScore
                    )
                  }
                  key={idx}
                  background="white"
                  border
                >
                  {tile === "X" ? (
                    <Close size="xxlarge" />
                  ) : tile === "O" ? (
                    <Radial size="xxlarge" />
                  ) : (
                    ""
                  )}
                </Box>
              ))
            : ""}
        </Grid>
      </Box>
    </Box>
  );
}

export default MainGame;
