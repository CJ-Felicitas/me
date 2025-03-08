import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer and a DevOps Engineer with experience in building microservices and web applications.
              <br />
              <br />I usually work around with
           
                <b className="purple"> Java, Spring Boot, Nodejs, Docker, Python, and Laravel. </b>
            
              <br />
              <br />
              My field of Interest's are exploring and experimenting open source projects of&nbsp;
           
                <b className="purple">
                  Cloud Native Computing Foundation (CNCF).{' '}
                </b>{' '}
              
             
              <br />
              <br />
              Nowadays, I'm heavily invested in learning  
              with <b className="purple">Cloud Computing</b> and
                <b className="purple">
                  {' '}
              Spring Framework.
                </b>
       
              &nbsp; 
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://scontent.fdvo3-1.fna.fbcdn.net/v/t39.30808-6/434190546_3523479664648521_3835614552491758851_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE87nzkfPgoiBbV9tXGNu6T8L4g5xFWhLzwviDnEVaEvJNgnezOf0E3ayrmezRTcUpmTzWFsi0sCZiGGuDWM2zr&_nc_ohc=C11tSANYCCIQ7kNvgEj6TAs&_nc_oc=AdidgmgrMl4ABQodEgMgGxO0yerZQsOo8H8qZ8P4-r6RJLqYjxQU7xCVI0uzYlkpiGo&_nc_zt=23&_nc_ht=scontent.fdvo3-1.fna&_nc_gid=AbFwoM0IwLeIGyCbwysggKF&oh=00_AYDtmVY3sGsFTgtK7J5cS-Xl4mai4lDYQ5P9K1ZctB_aNg&oe=67CF85F7" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CJ-Felicitas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cj-felicitas-851547203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <br></br>


            <br></br><br></br><br></br><br></br><br></br>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
