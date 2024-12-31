import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import luffy from "../../Assets/Projects/luffyIcon.jpg";
import cricketPic from "../../Assets/Projects/CricketorIcon.jpg";
import expressions from "../../Assets/Projects/publicationEmotions.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={luffy}
              isBlog={false}
              title="Anime4u"
              description="The anime recommendation system, built with React and Node.js, offers an engaging platform for anime enthusiasts. Users
 can browse trending shows, search by genre, and create accounts to save favorites.Powered by MongoDB for scalable data storage, the platform also allows users to write reviews, enhancing community
 interaction. A chat feature fosters lively discussions and sharing of anime recommendations, making it a comprehensive hub for anime lovers."
              ghLink="https://github.com/Sanskar1805/Anime4u"
              demoLink="https://clientanime4u.onrender.com/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cricketPic}
              isBlog={false}
              title="Cricketor"
              description=" Developed a cricketing website using PHP, with a front-end designed using HTML, CSS, Bootstrap, and JavaScript that
 features real-time score tracking and interactive elements, demonstrating advanced programming skills and attention to user
 experience. The project included MySQL database management, enabling users to store historical match data and access real-time scores
 through match codes."
              ghLink="https://github.com/Sanskar1805/Cricketor"
            />
          </Col>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={expressions}
              isBlog={true}
              title="VQA for Compound Emotions"
              description="This project advances Visual Question and Answering (VQA) systems by equipping them to recognize and interpret compound
 emotions in images, addressing the challenge of overlapping emotions. Leveraging VGG 19, attention models, Random Forest, and XGBoost, it delivers a modular, versatile solution for
 industry applications. The project offers a fresh approach to understanding complex human emotions in visual data by combining cutting-edge
 techniques."
              ghLink="https://www.sciencedirect.com/science/article/abs/pii/S0925231224003941?dgcid=coauthor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
