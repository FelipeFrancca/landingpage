import React from "react";
import { Box, Typography } from "@mui/material";
import "../../../assets/styles/home.css";

import UpArrow from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function Home() {
  return (
    <Box className="homeConteiner">
      <Typography variant="h5" fontWeight={400}>
        Felipe França
      </Typography>
      <br />
      <Typography variant="h2" fontWeight={700}>
        Desenvolvedor especializado
        <br />
        em interface e expeciência do usuário
      </Typography>
      <br />
      <Typography variant="h5" fontWeight={400}>
        Construção de aplicações web com as frameworks React e TypeScript <br />
        que permitem criar interfaces bonitas e responsivas para qualquer
        dispositivo. <br />
        Proeficiência em PHP e laravel, que possibilita desenvolver sistemas
        robustos e escaláveis, <br />
        atendendo às necessidades complexas e garantindo a segurança.
      </Typography>
      <Box className="topicContainer">
        <Typography variant="h6" fontWeight={400}>
          Linguagens de programação
        </Typography>
        <br />
        <Typography variant="h2" fontWeight={700}>
          Área de estudos
        </Typography>
      </Box>
      <br />
      <br />
      <Box className="upArrow">
        <UpArrow className="upArrow2" />
      </Box>
    </Box>
  );
}
