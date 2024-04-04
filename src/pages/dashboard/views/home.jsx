import React from "react";
import { Avatar, Box, CardActionArea, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../assets/styles/home.css";
import imageProfile from "../../../assets/images/profileImage.jpg";
import Swal from "sweetalert2";

import wpp from "../../../assets/images/icons/wpp.png";
import email from "../../../assets/images/icons/mail.png";
import linkedin from "../../../assets/images/icons/linkedin.png";
import github from "../../../assets/images/icons/github.png";

//Card area
import Card from "./components/card";
import CardTop from "./components/cardTop";
import js from "../../../assets/images/frameworks/js.png";
import react from "../../../assets/images/frameworks/react.png";
import typescript from "../../../assets/images/frameworks/typescript.png";
import php from "../../../assets/images/frameworks/php.png";
import laravel from "../../../assets/images/frameworks/laravel.png";
import docker from "../../../assets/images/frameworks/docker.png";
import aws from "../../../assets/images/frameworks/aws.png";
import gcp from "../../../assets/images/frameworks/gcp.png";
import mysql from "../../../assets/images/frameworks/mysql.png";
import postgre from "../../../assets/images/frameworks/postgre.png";
//End

//Big card area
import BigCard from "./components/bigCard"
import Particles from "./components/particles"
import faketrello from "../../../assets/images/projects/faketrello.jpg";
import loginpage from "../../../assets/images/projects/loginpage.jpg";
import pageelina from "../../../assets/images/projects/pageelina.jpg";
import parallax from "../../../assets/images/projects/parallax.jpg";

//End

export default function Home(alink) {
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
      var alink = "https://github.com/FelipeFrancca?tab=repositories"
      if (result.isConfirmed) {
        window.open(alink, '_blank');
      }
    });
  };

  return (
    <Box className="homeConteiner">
      <Particles />
      <Box className="homeConteiner">
        <Box className="myContacts">
          <Paper id="paper">
            <Avatar
              className="imageProfile"
              alt="Felipe França"
              src={imageProfile}
              sx={{ width: "15em", height: "auto" }}
            />
            <Typography variant="h6" letterSpacing={4} fontWeight={400}>
              Felipe França
            </Typography>
            <Box className="cardsContact">
              <CardTop
                image={wpp}
                alt="Framework Image"
                label="WhatsApp"
                link="https://api.whatsapp.com/send?phone=558487450440&text=Ola%20Felipe"
              />
              <CardTop
                image={email}
                alt="Mail"
                label="E-mail"
                link="mailto:profissional.felipesouza@gmail.com"
              />
              <CardTop
                image={linkedin}
                alt="LinkedIn"
                label="LinkedIn"
                link="https://www.linkedin.com/in/felipe-frança-22542a254/"
              />
              <CardTop
                image={github}
                alt="Contato mail"
                label="GitHub"
                link="https://github.com/FelipeFrancca"
              />
            </Box>
          </Paper>
        </Box>
        <Box className="aboutMe">
          <Paper id="paper">
            <Typography
              variant="p"
              letterSpacing={4}
              lineHeight={1}
              fontWeight={900}
              fontSize={"4vh"}
              textTransform={"uppercase"}
            >
              Desenvolvedor especializado em interface e experiência do usuário
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="p" letterSpacing={2} fontWeight={400}>
                É um prazer tê-lo interessado em meus trabalhos! <br />
                Lido com a construção de aplicações web, geralmente utilizando
                frameworks de JavaScript e PHP, dando preferência ao
                desenvolvimento em React.js, que se enquadra melhor na minha
                premissa de entregar sistemas mais acessíveis e responsivos para
                o usuário final.
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Paper id="paper">
          <Box className="topic2">
            <Box className="studyArea textLimiterWidth">
              <Typography variant="p" letterSpacing={4} fontWeight={400}>
                Linguagens de programação
              </Typography>
              <Typography
                variant="p"
                letterSpacing={4}
                fontWeight={900}
                fontSize={"3.5vh"}
                textTransform={"uppercase"}
              >
                Principais áreas de estudo
              </Typography>
            </Box>
            <Box className="cards">
              <Box className="cards-slide">
                <Card image={js} alt="Framework Image" label="JavaScript" />
                <Card image={react} alt="Framework Image" label="React" />
                <Card
                  image={typescript}
                  alt="Framework Image"
                  label="Typescript"
                />
                <Card image={php} alt="Framework Image" label="PHP" />
                <Card image={laravel} alt="Framework Image" label="Laravel" />
                <Card image={docker} alt="Framework Image" label="Docker" />
                <Card
                  image={aws}
                  alt="Framework Image"
                  label="Amazon Web Services"
                />
                <Card
                  image={gcp}
                  alt="Framework Image"
                  label="Google Cloud Platform"
                />
                <Card image={mysql} alt="Framework Image" label="MySQL" />
                <Card
                  image={postgre}
                  alt="Framework Image"
                  label="PostgreSQL"
                />
              </Box>
              <Box className="cards-slide">
                <Card image={js} alt="Framework Image" label="JavaScript" />
                <Card image={react} alt="Framework Image" label="React" />
                <Card
                  image={typescript}
                  alt="Framework Image"
                  label="Typescript"
                />
                <Card image={php} alt="Framework Image" label="PHP" />
                <Card image={laravel} alt="Framework Image" label="Laravel" />
                <Card image={docker} alt="Framework Image" label="Docker" />
                <Card
                  image={aws}
                  alt="Framework Image"
                  label="Amazon Web Services"
                />
                <Card
                  image={gcp}
                  alt="Framework Image"
                  label="Google Cloud Platform"
                />
                <Card image={mysql} alt="Framework Image" label="MySQL" />
                <Card
                  image={postgre}
                  alt="Framework Image"
                  label="PostgreSQL"
                />
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper id="paper">
          <Box className="topic1 lineBreak">
            <Box className="studyArea textLimiterWidth">
              <Typography variant="p" letterSpacing={4} fontWeight={400}>
                Destaque
              </Typography>
              <Typography
                variant="p"
                letterSpacing={4}
                fontWeight={900}
                fontSize={"3.5vh"}
                textTransform={"uppercase"}
              >
                Projetos pessoais
              </Typography>
            </Box>
            <Box className="bigCards">
              <BigCard
                image={faketrello}
                alt="Fake Trello"
                label="Fake Trello"
                label2="Este é um projeto de kanban com as funcionalidades de drag an drop, simulando as ferramentas presentes no sistema Trello."
                component={Link}
                to="/landingpage"
              />
              <BigCard
                image={loginpage}
                alt="Página de login"
                label="Página de login"
                label2="Uma simples pagina de login criada para praticar noções de design e interface do usuário."
                component={Link}
                to="/landingpage"
              />
              <BigCard
                image={parallax}
                alt="Parallax"
                label="Parallax"
                label2="Pratica de aplicação do efeito Parallax, que é uma técnica em que as imagens de plano de fundo movem-se mais lentamente que as imagens em primeiro plano, criando uma ilusão de profundidade em uma cena 2D."
                component={Link}
                to="/landingpage"
              />
              <BigCard
                image={pageelina}
                alt="Portfolio simples"
                label="Portfolio simples"
                label2="Projeto de portfolio simples elaborado para minha esposa disvulgar seus links de revenda."
                component={Link}
                to="/landingpage"
              />
              <Box>
                <CardActionArea
                className="quickAcessGit"
                onClick={handleClick}
                alink
                >
                    <Typography variant="h6">
                      Acesse aos meus repositórios
                    </Typography>
                </CardActionArea>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
