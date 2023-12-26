import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Tooltip, Typography, Zoom } from "@mui/material";

function ActionAreaCard(props) {
  return (
    <Tooltip
      title={props.label}
      TransitionComponent={Zoom}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "7rem",
          backgroundColor: "rgb(42, 42, 42)",
          padding: 2,
          paddingTop: 5,
          marginTop: 3,
          borderRadius: 50,
          flexDirection: "column",
          "&:hover":{
            background: `linear-gradient(180deg, rgb(42, 42, 42) 80%, rgba(131, 9, 198, 1) 100%)`,
            },
            "@media (max-width: 767px)": {
              width: "5em",
            }
        }}
      >
        <Typography sx={{fontSize: "90%"}}>{props.label}</Typography>
        <CardMedia
          component="img"
          height="auto"
          image={props.image}
          alt="Card"
          sx={{ display: "flex" }}
        />
      </CardActionArea>
    </Tooltip>
  );
}

const AreaCard = (props) => {
  return (
    <Box>
      {props.disabled ? (
        <ActionAreaCard disabled {...props}>
          {props.label}
        </ActionAreaCard>
      ) : (
        <ActionAreaCard backgroundImage={props.image} {...props}>
          {props.label}
        </ActionAreaCard>
      )}
    </Box>
  );
};

export default AreaCard;
