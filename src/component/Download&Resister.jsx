import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToActionButtons = () => {
  return (
    <Container fluid className="CallToActionButtons py-4" style={{ background: 'linear-gradient(to right, #DCF4FF, #ABE4FF)' }}>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button type='btn'  className="px-4" style={{ background: "#0F6E9B", color: "#fff", borderRadius: "0px", border: "none", fontSize: "24px" }}>
            Enroll Now For Free
          </Button>
        </Col>
        <Col xs="auto">
          <Button type='btn'  className="px-4" style={{ background: "#0F6E9B", color: "#fff", borderRadius: "0px", border: "none", fontSize: "24px" }}>
            Register Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CallToActionButtons;
