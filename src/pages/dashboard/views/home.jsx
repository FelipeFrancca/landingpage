import React from "react";
import { Box, Typography } from "@mui/material";
import "../../../assets/styles/home.css";

import { Link } from "react-router-dom";

import Card from "./components/card";
import HomeButtom from "./components/homeButton";
import js from "../../../assets/images/frameworks/js.png";
import php from "../../../assets/images/frameworks/php.png";
import database from "../../../assets/images/frameworks/database.png";

export default function Home() {
  return (
    <Box className="homeConteiner">
      <section>
        <Box className="presentation lineBreak">
          <Typography variant="p" letterSpacing={4} fontWeight={400}>
            Felipe França
          </Typography>
          <br />
          <Typography
            variant="p"
            letterSpacing={4}
            lineHeight={1}
            fontWeight={900}
            fontSize={"3vh"}
            textTransform={"uppercase"}
          >
            Dev. especializado em interface e expeciência do usuário
          </Typography>
          <Box className="textLimiterWidth" sx={{ marginTop: 2 }}>
            <Typography variant="p" letterSpacing={2} fontWeight={400}>
              Construção de aplicações web com as frameworks React e TypeScript
              que permitem criar interfaces bonitas e responsivas para qualquer
              dispositivo. Proeficiência em PHP e laravel, que possibilita
              desenvolver sistemas robustos e escaláveis, atendendo às
              necessidades complexas e garantindo a segurança.
            </Typography>
          </Box>
        </Box>
        <Box className="topic1 lineBreak">
          <Box className="studyArea">
            <Typography variant="p" letterSpacing={4} fontWeight={400}>
              Linguagens de programação
            </Typography>
            <Typography
              variant="p"
              letterSpacing={4}
              fontWeight={900}
              fontSize={"5vh"}
              textTransform={"uppercase"}
            >
              Área de estudo
            </Typography>
          </Box>
            <Box className="cardsContainer">
              <Box className="cards">
                <HomeButtom
                  image={js}
                  alt="green iguana"
                  component={Link}
                  to=""
                  label1="JavaScript, React.JS, Typescrypt.JS"
                  label2=""
                />
                <HomeButtom
                  image={php}
                  alt="green iguana"
                  component={Link}
                  to=""
                  label1="PHP"
                  label2="Laravel"
                />
                <HomeButtom
                  image={database}
                  alt="green iguana"
                  component={Link}
                  to=""
                  label1="MySQL"
                  label2="PostgreSQL"
                />
              </Box>
            </Box>
        </Box>
      </section>
    </Box>
  );
}
