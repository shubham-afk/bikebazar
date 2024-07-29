import React from "react";
import { Container, Button } from "react-bootstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Container
        fluid
        className="text-center text-white d-flex flex-column justify-content-center align-items-center min-vh-100 home-background"
      >
        <div className="text-wrapper">
          <h1 className="custom-header">ROYAL ENFIELD</h1>
          <p className="custom-paragraph">MADE LIKE A GUN</p>
          <Button
            onClick={() =>
              window.open(
                "https://www.royalenfield.com/in/en/home/",
                "_blank",
                "noopener"
              )
            }
            className="custom-button"
          >
            Shop Now <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
