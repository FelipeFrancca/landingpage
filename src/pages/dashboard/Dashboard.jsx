import React from "react";
import Box from "@mui/material/Box";
import "../../assets/styles/Dashboard.css";

import logoTopo from "../../assets/images/icons/fTitle.png";
import email from "../../assets/images/icons/mail.png";
import whatsapp from "../../assets/images/icons/wpp.png";

export default function dashboard() {
  return (
    <Box className="container">
      <Box className="containerTop">
      <a href="/">
          <img src={logoTopo} alt="logoTopo" />
        </a>
      </Box>

      <Box className="containerBottom">
        <a href="mailto:profissional.felipesouza@gmail.com">
          <img src={email} alt="E-mail" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=558487450440">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </Box>
    </Box>
  );
}
