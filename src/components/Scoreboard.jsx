import React from "react";
import { Box, Text } from "grommet";

function Scoreboard(props) {
  return (
    <Box>
      <Box direction="row">
        <Text>{props.players.players.nameX}</Text>
        <Text margin={{ horizontal: "5px" }}>(X's) </Text> -
        <Text margin={{ left: "5px" }}>{props.score.X}</Text>
      </Box>
      <Box direction="row">
        <Text>{props.players.players.nameO}</Text>
        <Text margin={{ horizontal: "5px" }}>(O's)</Text> -
        <Text margin={{ left: "5px" }}>{props.score.O}</Text>
      </Box>
    </Box>
  );
}

export default Scoreboard;
