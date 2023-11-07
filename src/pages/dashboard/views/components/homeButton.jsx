// HomeButton.js
import { Box, Button } from "@mui/material";
import React from "react";

function ButtonItem(props) {
  const { sx, image, ...other } = props;

  return (
    <Box
      sx={{
        width: '500px',
        height: "612.55px",
        display: "flex",
        textAlign: "center",
        fontWeight: 900,
        transition: "all 0.2s",
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        '&:hover': {
          border: "#fff solid 3px",
          transform: "scale(1.1)",
        }
      }}
      variant="contained"
      {...other}
    >
    </Box>
  );
}

const HomeButton = (props) => {
  const { ...other } = props;
  return (
    <Box>
      {props.disabled ? (
        <ButtonItem disabled >{props.label}</ButtonItem>
      ) : (
        <ButtonItem backgroundImage={props.image} {...other}>{props.label1}<br />{props.label2}</ButtonItem>
      )}
    </Box>
  );
};

export default HomeButton;
