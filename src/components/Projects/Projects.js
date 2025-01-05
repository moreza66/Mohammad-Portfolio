import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import MovieTime from "../../Assets/Projects/MovieTime.jpg";
import mystore from "../../Assets/Projects/mystore.jpg";
import ClothingGrusss from "../../Assets/Projects/ClothingGrusss.jpg";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mystore}
              isBlog={false}
              title="Tailored-Tails"
              description="Built a full-stack MERN application using React, GraphQL, Node.js, Express.js, and MongoDB, with authentication.
              Focused on user demand, with a polished, responsive, and interactive UI, and adhered to quality coding standards and best practices."
              ghLink="https://github.com/RDCERP/my-stores"
              demoLink="https://my-stores.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ClothingGrusss}
              isBlog={false}
              title="ClothingGrusss"
              description="Work in a small team to design, develop and test client-server interaction that maximizes practical and relevant information retrieval.
              MySQL and Sequelize ORM for database interactions and JavaScript, Node.js, Express.js and RESTful API for front-end interactions."
              ghLink="https://github.com/moreza66/project2_clothingurusss"
              demoLink="https://clothingurusss.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieTime}
              isBlog={false}
              title="Movie-Time"
              description="Developed a responsive web application that prioritizes delivery of movie information to the user based on their inputs.
              All interactions written in HTML, Bulma, JavaScript with data delivery from local storage systems"
              ghLink="https://github.com/moreza66/Movie-Time"
              demoLink="https://moreza66.github.io/Movie-Time/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
