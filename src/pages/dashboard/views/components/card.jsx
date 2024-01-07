import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Tooltip, Zoom } from "@mui/material";

function ActionAreaCard(props) {
  return (
    <Tooltip title={props.label} TransitionComponent={Zoom}>
      <CardActionArea
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "6em",
          backgroundColor: "rgb(42, 42, 42)",
          padding: 2,
          paddingTop: 5,
          borderRadius: 50,
          marginBottom: 2,
          "&:hover":{
          background: `linear-gradient(180deg, rgb(42, 42, 42) 80%, rgba(131, 9, 198, 1) 100%)`,
          },
          "@media (max-width: 767px)": {
            width: "3.9em",
          }
        }}
      >
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
