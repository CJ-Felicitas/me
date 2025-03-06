import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { BiTerminal } from 'react-icons/bi'
import {CgCPlusPlus} from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiLinux,
  DiLaravel,
  DiDjango,
  DiPhp
  
} from 'react-icons/di'
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiTypescript,
  SiAmazonaws,
  SiGraphql,
  SiSpring,
  SiDocker,
  SiNginx,
  SiVuedotjs,
  SiRabbitmq,
  SiMetabase,
  SiRedis,
  SiSpringboot,
  SiKubernetes,
  SiGithubactions,
  SiFlask,
  SiTailwindcss,
  SiApachecloudstack
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize: 20}}test>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSpringboot/>
      <p style={{fontSize: 20}}test>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{fontSize: 20}}test>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      <p style={{fontSize: 20}}test>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{fontSize: 20}}test>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize: 20}}test>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p style={{fontSize: 20}}test>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: 20}}test>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{fontSize: 20}}test>Amazon Web Services</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: 20}}test>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <p style={{fontSize: 20}}test>Linux (Ubuntu)</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <p style={{fontSize: 20}}test>PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
        <p style={{fontSize: 20}}test>Nginx</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs/>
        <p style={{fontSize: 20}}test>Vue.js</p> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel/>
        <p style={{fontSize: 20}}test>Laravel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq/>
        <p style={{fontSize: 20}}test>RabbitMQ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMetabase/>
        <p style={{fontSize: 20}}test>Metabase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango/>
        <p style={{fontSize: 20}}test>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis/>
        <p style={{fontSize: 20}}test>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
        <p style={{fontSize: 20}}test>Tailwind</p>
      </Col>
   
    </Row>
  )
}

export default Techstack
