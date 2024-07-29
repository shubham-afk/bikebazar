import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_vwn2seb",
        "template_nmn5gkf",
        formData,
        "ukIch06vl9ojDudvY"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormData({
          name: "",
          subject: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <Container
      fluid
      className="p-4 contact-background"
      style={{ color: "white" }}
    >
      <Row>
        <Col md={6}>
          <h2 className="custom-header-title">Contact Me</h2>
        </Col>
        <Col md={6}>
          <Form className="mt-4 mx-4 " onSubmit={handleSubmit}>
            <Form.Group controlId="name custom-form-title">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="subject" className="mt-3 custom-form-title">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group
              controlId="description"
              className="mt-3 custom-form-title"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              variant="warning"
              className="mt-3 custom-form-title"
              style={{ backgroundColor: "orange", borderColor: "orange" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
