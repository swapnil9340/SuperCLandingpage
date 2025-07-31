import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RegistrationForm from '../common-component/model/Model';

const CallToActionButtons = () => {
  return (
    <Container fluid className="CallToActionButtons py-4" style={{ background: 'linear-gradient(to right, #DCF4FF, #ABE4FF)' }}>
      <Row className="justify-content-center"  >
        <Row  className="justify-content-center" xs="auto">
          <RegistrationForm triggerLabel="Enroll Now For Free" />
          <RegistrationForm triggerLabel="Mock Test for 99" /> 
          <RegistrationForm triggerLabel="Mock Plans + Unlimited Questions for 199" /> 
        </Row>
      </Row>
    </Container>
  );
};

export default CallToActionButtons;
