// HomeButton.js
import { Box} from "@mui/material";
import React from "react";

function ButtonItem(props) {
  const { sx, image, ...other } = props;

  return (
    <Box
      sx={{
        width: '200px',
        height: "15em",
        marginTop: '1em',
        display: "flex",
        textAlign: 'left',
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 900,
        transition: "all 0.2s",
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        left: '1',
        '&:img':{
          width: '50em',
        },
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
