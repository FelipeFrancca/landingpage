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
      <a href="https://web.whatsapp.com">
          <img src={logoTopo} alt="logoTopo image" />
        </a>
      </Box>

      <Box className="containerBottom">
        <a href="https://web.whatsapp.com">
          <img src={email} alt="E-mail image" />
        </a>
        <a href="https://web.whatsapp.com">
          <img src={whatsapp} alt="Whatsapp image" />
        </a>
      </Box>
    </Box>
  );
}
