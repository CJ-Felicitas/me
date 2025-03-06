import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/CJ_FELICITAS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">Experience</h3>
          <Resumecontent
              title="Software Engineer, DevOps Engineer, and Partner (Opulenz)"
              date="December 2024 - Present"
              content={[
                "Designed the Cloud Architecture of the system using AWS",
                "Developed multiple microservices for the system using Spring Boot, Nodejs, and Flask",
                "Deployed multiple microservices into the AWS using Docker, AWS S3, AWS RDS, AWS ECR, AWS Amplify, and AWS EC2",
                "Developed a CI/CD pipeline using Bash Scripts, Nodejs, Github Actions, and Docker",
                "Temporarily acts as a Data Engineer for the startup",
                "Wore many hats"
              ]}
            />
           
            <Resumecontent
              title="Full Stack Software Developer (Apollo Technologies)"
              date="July 2024 - December 2024"
              content={[
                "Developed multiple microservices for the Fintech Projects using Spring Boot, Nodejs, and Flask",
                "Assisted in the Development of the Apollo Billing System using Spring Boot, Vuejs, and Flask",
                "Containerized, Configured, and Deployed multiple microservices using Docker Compose.",
                "Developed a CI/CD pipeline using Bash Scripts, Nodejs, Github Actions, and Docker",
                "Backend Lead for a Mobile Application Project using Flask.",
                "Developed a Mini Web Application using Vuejs that acts as a microfrontend for the mobile application."
              ]}
            />
     
       
       <Resumecontent
              title="Full Stack Software Developer, DevOps and Technical Support (University of Southeastern Philippines - Obrero Student Council"
              date="September 2023 - November 2023"
              content={[
                "Performed Technical Support During the Student Council Elections 2023",
                "Deployed the Voting System using AWS EC2",
                "Developed new features and fix existing bugs in the Voting System Website PHP",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor of Science in Information Technology Major in Information Security "
              date="2020 - 2024"
              content={[
                `GPA: 1.5 `,
                "I've completed my bachelor's degree and graduated with Latin Honors (Cum Laude).",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
