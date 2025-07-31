import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RegistrationForm from '../common-component/model/Model';

const CallToActionButtons = () => {
  return (
    <Container fluid className="CallToActionButtons py-4" style={{ background: 'linear-gradient(to right, #DCF4FF, #ABE4FF)' }}>
      <Row className="justify-content-center">
        <Col xs="auto">
        <RegistrationForm></RegistrationForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CallToActionButtons;
