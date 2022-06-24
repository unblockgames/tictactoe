import React from "react";
import {
  Box,
  Button,
  Heading,
  Form,
  FormField,
  TextInput,
  Text,
} from "grommet";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../contexts/PlayerContext";
import $ from "jquery";

const handleClick = (value, players, navigate) => {
  players.setPlayers(value);
  navigate("/play");
};

function LandingPage(props) {
  const [value, setValue] = React.useState();
  const [whichForm, setWhichForm] = React.useState("one");
  const navigate = useNavigate();
  const players = React.useContext(PlayerContext);
  return (
    <Box>
      <Heading>Welcome to Tic Tac toe</Heading>
      <Box width={"medium"}>
        {whichForm === "one" ? (
          <Heading>Player X</Heading>
        ) : (
          <Heading>Player O</Heading>
        )}
        <Form value={value} onChange={(nextValue) => setValue(nextValue)}>
          {whichForm === "one" ? (
            <FormField label="Name" name="nameX">
              <Box width="medium">
                <TextInput name="nameX" />
              </Box>
            </FormField>
          ) : (
            <FormField label="Name" name="nameO">
              <Box width="medium">
                <TextInput id="text2" name="nameO" />
              </Box>
            </FormField>
          )}

          {whichForm === "one" ? (
            <Button
              label="Continue"
              type="reset"
              onClick={() => {
                setWhichForm("two");
              }}
            />
          ) : (
            <Button
              label="Start Game"
              onClick={() => handleClick(value, players, navigate)}
            />
          )}
        </Form>
      </Box>
    </Box>
  );
}

export default LandingPage;
