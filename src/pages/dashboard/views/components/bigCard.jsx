import React from "react";
import {
  Box,
  CardActionArea,
  CardMedia,
  Tooltip,
  Zoom,
  Typography,
} from "@mui/material";
import Swal from 'sweetalert2'

function ActionAreaCard(props) {
var aLink = props.link

  const handleClick = () => {
    Swal.fire({
      title: "Redirecionamento por link",
      text: "Você será redirecionado para uma nova aba. Deseja continuar?",
      icon: "info",
      showCloseButton: true,
      confirmButtonColor: "rgb(80, 4, 122)",
      cancelButtonColor: "rgba(131, 9, 198, 1)",
      confirmButtonText: "Sim, quero continuar!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(aLink, '_blank');
      }
    });
  };

  return (
    <Box className="card">
      <Tooltip title={props.label} TransitionComponent={Zoom}>
        <CardActionArea
          sx={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            width: "30em",
            backgroundColor: "rgb(42, 42, 42)",
            padding: 2,
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
          <Box style={{ overflowY: "auto", position: "relative", width: "100%",}}>
            <CardMedia
              component="img"
              height="auto"
              image={props.image}
              alt="bigCard"
              sx={{ display: "flex", }}
              onClick={handleClick}
            />
            <Typography
              variant="p"
              sx={{
                "&:hover": {
                  opacity: 1,
                },
                color: "#fff",
                position: "absolute",
                fontSize: "1.3em",
                top: 0,
                left: 0,
                textAlign: "left",
                padding: 2,
                opacity: 0,
                zIndex: 1,
                transition: "opacity .2s linear",
                "#box": {
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: ".2s ease-in-out",
                  fontWeight: "900",
                  backgroundColor: "#000",
                  borderRadius: "50px",
                  padding: "2px",
                },
                "#box:hover": {
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
              <Box id="box" onClick={handleClick}>{props.label3}</Box>
            </Typography>
          </Box>
        </CardActionArea>
      </Tooltip>
    </Box>
  );
};

export default ActionAreaCard;
