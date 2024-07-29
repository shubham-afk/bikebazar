import React from "react";
import "./Feature.css";
import hunter from "./hunter.png";
import meteor from "./meteor.png";
import classic from "./classic.png";
import { Container, Row, Col } from "react-bootstrap";

const Feature = () => {
  return (
    <Container
      fluid
      className="text-center text-white d-flex flex-column justify-content-center align-items-center min-vh-100 home1-background"
    >
      <div className="title-container">
        <h1 className="feature-title">
          Featured Bikes <span className="highlight">2024</span>
        </h1>
        <p className="feature-paragraph">Best Selling Bikes</p>
      </div>
      <Row className="feature-images">
        <Col md={4} className="image-col">
          <a
            href="https://www.royalenfield.com/in/en/motorcycles/hunter-350/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={hunter}
              width={550}
              height={450}
              alt="Bike 1"
              className="feature-image"
            />
          </a>
        </Col>
        <Col md={4} className="image-col">
          <a
            href="https://www.royalenfield.com/in/en/motorcycles/classic-350/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={classic} alt="Bike 2" className="feature-image" />
          </a>
        </Col>
        <Col md={4} className="image-col">
          <a
            href="https://www.royalenfield.com/in/en/motorcycles/meteor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={meteor} alt="Bike 3" className="feature-image" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
