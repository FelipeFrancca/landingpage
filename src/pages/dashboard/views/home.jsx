import React from "react";
import { Box, Typography } from "@mui/material";
import "../../../assets/styles/home.css";

//Card area
import Card from "./components/card";
import js from "../../../assets/images/frameworks/js.png";
import react from "../../../assets/images/frameworks/react.png";
import typescript from "../../../assets/images/frameworks/typescript.png";
import php from "../../../assets/images/frameworks/php.png";
import laravel from "../../../assets/images/frameworks/laravel.png";
import docker from "../../../assets/images/frameworks/docker.png";
import aws from "../../../assets/images/frameworks/aws.png";
import gcp from "../../../assets/images/frameworks/gcp.png";
import databases from "../../../assets/images/frameworks/databases.png";
//End

//Big card area
import BigCard from "./components/bigCard";

//End

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
              Principais áreas de estudo
            </Typography>
          </Box>
          <Box className="cards" sx={{ marginTop: 1 }}>
            <Card image={js} alt="Framework Image" label="JavaScript" />
            <Card image={react} alt="Framework Image" label="React" />
            <Card image={typescript} alt="Framework Image" label="Typescript" />
            <Card image={php} alt="Framework Image" label="PHP" />
            <Card image={laravel} alt="Framework Image" label="Laravel" />
            <Card image={docker} alt="Framework Image" label="Docker" />
            <Card image={aws} alt="Framework Image" label="Amazon Web Services" />
            <Card image={gcp} alt="Framework Image" label="Google Cloud Platform" />
            <Card image={databases} alt="Framework Image" label="Databases" />
          </Box>
        </Box>
        <Box className="topic1 lineBreak">
          <Box className="studyArea">
            <Typography variant="p" letterSpacing={4} fontWeight={400}>
              Destaque
            </Typography>
            <Typography
              variant="p"
              letterSpacing={4}
              fontWeight={900}
              fontSize={"5vh"}
              textTransform={"uppercase"}
            >
              Projetos pessoais
            </Typography>
          </Box>
          <Box className="cards" sx={{ marginTop: 1 }}>
            <BigCard image={js} alt="Fake Trello" label="Fake Trello" label2="Projeto criado com as funcionalidades de drag an drop, simulando as ferramentas presentes no Trello." />
            <BigCard image={react} alt="Pagina de login" label="Pagina de login" label2="Uma simples pagina de login criada para praticar noções de designer e interface do usuário." />
            <BigCard image={typescript} alt="Meu casamento" label="Meu casamento" label2="Site criado para guardar detalhes sobre meu casamento até o dia da cerimônia." />
          </Box>
        </Box>
      </section>
    </Box>
  );
}
