import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import taskify from "../../Assets/Projects/Taskify.png";
import aF from "../../Assets/Projects/artisteeF.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
         Most of my works are related to Backend Services which means it's not meant to have a User Interface, However, Here are some of my projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Redock"
              description="A Node.js application that acts as a webhook listener for the Github Repository. It listens for the push event and then executes a bash command to pull the latest docker image from a container registry and updates the running service in the docker compose."
              link="https://github.com/CJ-Felicitas/redock"
              liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
    
              isBlog={false}
              title="Mailinator-V2"
              description="The Second Version of Mailinator, the my version 1 was used in one of the Fintech Projects of Apollo Technologies. This is a Spring Boot application that acts as an API proxy to the Mailgun API to send emails. It supports RabbitMQ for async processing of emails and also has a REST API to send emails."
              link="https://github.com/CJ-Felicitas/mailinator-v2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Angela"
              description="A simple configuration model for the Nginx that can act as an API gateway or reverse proxy server. This project is still in the development phase and is expected to be used for my upcoming projects."
              link="https://github.com/MohitSojitra/e-commerce-store"
              liveLink="https://github.com/CJ-Felicitas/angela"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="PulseExpress"
              description="Also known as Harmonized Planning Monitoring and Evaluation System (HPMES) is a web application that is used to monitor and evaluate the current status of the 8 major programs of the Department of Social Weldare and Development (DSWD)."
              link="https://github.com/CJ-Felicitas/pulsexpressv2"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Myralla"
              description="One of my ongoing projects that runs as a Backend Service to provide a rewards engine. The idea of this project is to provide a rewards system for Fintech Projects. It is primarily built using Spring Boot." 
              link="https://github.com/CJ-Felicitas/myralla-core"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
