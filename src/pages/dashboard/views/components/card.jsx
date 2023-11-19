import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, IconButton, Tooltip, Zoom } from "@mui/material";

function ActionAreaCard(props) {
  return (
    <Tooltip title={props.label} TransitionComponent={Zoom}>
      <IconButton>
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "auto",
            backgroundColor: "rgb(42, 42, 42)",
            padding: 2,
            borderRadius: 50,
          }}
        >
          <CardMedia
            component="img"
            height="50"
            image={props.image}
            alt="green iguana"
            sx={{ display: "flex" }}
          />
        </CardActionArea>
      </IconButton>
    </Tooltip>
  );
}

const AreaCard = (props) => {
  return (
    <Box>
      {props.disabled ? (
        <ActionAreaCard disabled {...props}>
          {props.labe}
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
