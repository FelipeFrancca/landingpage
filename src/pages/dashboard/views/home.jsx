import React from "react";
import { Box, Typography } from "@mui/material";
import "../../../assets/styles/home.css";

import { Link } from "react-router-dom";

import UpArrow from "@mui/icons-material/KeyboardDoubleArrowUp";
import Card from "./components/card";
import HomeButtom from "./components/homeButton";
import Image from '../../../assets/images/icons/fTitle.png'

export default function Home() {
  return (
    <Box className="homeConteiner">
      <Box>
        <Typography className="textHeader" variant="p">
        Desenvolvedor
        </Typography>
      </Box>
      <Box className="presentation">
        <Typography variant="h5" letterSpacing={3} fontWeight={400}>
          Felipe França
        </Typography>
        <br />
        <Typography
          fontSize="3.875rem"
          lineHeight="4.0625rem"
          letterSpacing={2}
          fontWeight={900}
        >
          Dev. especializado em
          <br />
          interface e expeciência do usuário
        </Typography>
        <br />
        <Typography variant="h5" letterSpacing={2} fontWeight={400}>
          Construção de aplicações web com as frameworks React e TypeScript
          <br />
          que permitem criar interfaces bonitas e responsivas para qualquer
          dispositivo. <br />
          Proeficiência em PHP e laravel, que possibilita desenvolver sistemas
          robustos e escaláveis, <br />
          atendendo às necessidades complexas e garantindo a segurança.
        </Typography>
      </Box>
      <Box className="topicContainer">
        <Typography variant="h6" letterSpacing={2} fontWeight={400}>
          Linguagens de programação
        </Typography>
        <br />
        <Typography variant="h2" letterSpacing={2} fontWeight={700}>
          Área de estudos
        </Typography>
      </Box>
      <br />
      <br />
      <Box className="upArrow">
        <UpArrow className="upArrow2" />
      </Box>
      <Box className="cardsContainer">
        <Box className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <HomeButtom
          image={Image}
          alt="green iguana"
          component={Link}
          to=""
          label1="REACT.JS"
          label2="REACT.JS2"
          />
          <HomeButtom
          image={Image}
          alt="green iguana"
          component={Link}
          to=""
          label1="REACT.JS"
          label2="REACT.JS2"
          />
        </Box>
      </Box>
    </Box>
  );
}
