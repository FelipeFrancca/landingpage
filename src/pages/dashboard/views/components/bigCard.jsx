import React from "react";
import {
  Box,
  CardActionArea,
  CardMedia,
  Tooltip,
  Zoom,
  Typography,
} from "@mui/material";

const SeuComponente = (props) => {
  return (
    <Box className="card">
      <Tooltip title={props.label} TransitionComponent={Zoom}>
        <CardActionArea
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            width: "30em",
            backgroundColor: "rgb(42, 42, 42)",
            padding: 2,
            position: "relative",
            overflow: "hidden",
            marginBottom: 2,
            "&::before": {
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0)",
              transition: "background-color 0.3s ease",
              zIndex: 1,
            },
            "&:hover::before": {
              backgroundColor: "rgba(0, 0, 0, 0.851)",
            },
            "@media (max-width: 767px)": {
              width: "20em",
            },
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={props.image}
            alt="bigCard"
            sx={{ display: "flex" }}
          />
          <Typography
            variant="p"
            sx={{
              "&:hover": {
                opacity: 1,
              },
              color: "#fff",
              position: "absolute",
              width: "90%",
              height: "100%",
              fontSize: "1.3em",
              top: 0,
              left: 0,
              textAlign: "left",
              padding: 2,
              opacity: 0,
              zIndex: 1,
              transition: "opacity .2s linear",
              a: {
                color: "#fff",
                textDecoration: "none",
                transition: ".2s ease-in-out",
                fontWeight: "900",
                backgroundColor: "#000",
                borderRadius: "50px",
                padding: "2px",
              },
              "a:hover": {
                color: "rgba(131, 9, 198, 1)",
                backgroundColor: "#fff",
                borderRadius: "50px",
                padding: "2px",
              },
              "@media (max-width: 767px)": {
                fontSize: "1em",
              },
            }}
          >
            {props.label} <br /> <br />
            {props.label2} <br /> <br />
            <a href={props.link}>{props.label3}</a>
          </Typography>
        </CardActionArea>
      </Tooltip>
    </Box>
  );
};

export default SeuComponente;
