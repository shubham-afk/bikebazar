import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
import classic350 from "./BikeImages/classic350.webp";
import bullet350 from "./BikeImages/bulletcard.webp";
import Himalayan from "./BikeImages/himalayancard.jpg";
import Interceptor from "./BikeImages/interceptorcard.jpg";
import Meteor from "./BikeImages/meteorcard.avif";
import Continental from "./BikeImages/continentalcard.jpeg";

const Shop = () => {
  const bikes = [
    {
      id: 1,
      image: classic350,
      name: "Royal Enfield Classic 350",
      details: "350cc | 20.2bhp | 5-speed",
      link: "https://www.royalenfield.com/in/en/motorcycles/classic-350/",
    },
    {
      id: 2,
      image: bullet350,
      name: "Royal Enfield Bullet 500",
      details: "500cc | 27.2bhp | 5-speed",
      link: "https://www.royalenfield.com/in/en/motorcycles/bullet-500/",
    },
    {
      id: 3,
      image: Himalayan,
      name: "Royal Enfield Himalayan",
      details: "411cc | 24.3bhp | 5-speed",
      link: "https://www.royalenfield.com/in/en/motorcycles/himalayan/",
    },
    {
      id: 4,
      image: Interceptor,
      name: "Royal Enfield Interceptor 650",
      details: "650cc | 47bhp | 6-speed",
      link: "https://www.royalenfield.com/in/en/motorcycles/interceptor/",
    },
    {
      id: 5,
      image: Continental,
      name: "Royal Enfield Continental GT 650",
      details: "650cc | 47bhp | 6-speed",
      link: "https://www.royalenfield.com/in/en/motorcycles/continental-gt/",
    },
    {
      id: 6,
      image: Meteor,
      name: "Royal Enfield Meteor 350",
      details: "350cc | 20.2bhp | 5-speed",
      link: "https://www.royalenfield.com/in/en/motorcycles/meteor/",
    },
  ];

  return (
    <Container fluid className="shop-container">
      <Row>
        {bikes.map((bike) => (
          <Col md={4} className="mb-4" key={bike.id}>
            <Card className="bike-card">
              <Card.Img variant="top" src={bike.image} alt={bike.name} />
              <Card.Body className="bike-card-body">
                <div className="bike-card-content">
                  <div className="bike-info">
                    <Card.Title className="bike-name">{bike.name}</Card.Title>
                    <Card.Text className="bike-details">
                      {bike.details}
                    </Card.Text>
                  </div>
                  <Button
                    variant="outline-light"
                    className="buy-now-button"
                    href={bike.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now <FontAwesomeIcon icon={faShoppingCart} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
