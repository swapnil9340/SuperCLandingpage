import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Trusted = () => {
  return (
    <Container  fluid className="trustedContainer mt-5 text-center d-flex justify-content-end flex-column" style={{backgroundImage : "url('/bg.svg')", paddingTop:"250px" ,paddingBottom :"40px"}} >
      <h3 className="fw-bold mb-4" style={{color : "#14516E"}}>Trusted By <span style={{color : "#0F6E9B"}}>Thousands</span> </h3>
      
      <Row className="pb-4"  style={{color : "#0F6E9B"}}>
        <Col xs={12} md={4} className="mb-3 mb-md-0" >
          <h2 className="fw-bold">50,000+</h2>
          <p><strong>Students</strong> Across India</p>
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <h2 className="fw-bold">4.8+</h2>
          <p><strong>Rated 4.8+</strong> on App Store & Play Store</p>
        </Col>
        <Col xs={12} md={4}>
          <h2 className="fw-bold">50K+</h2>
          <p><strong>Trusted by 50K+</strong> Parents</p>
        </Col>
      </Row>

      <Row className="row2 d-flex flex-column flex-sm-row align-items-center justify-content-center">
      <Col xs={12} className='d-flex flex-column flex-sm-row align-items-center justify-content-center' >
        <img
          src="/IIm.png" 
          alt="IIM Sambalpur Logo"
          className="me-md-3 mb-3 mb-md-0"
          style={{ height: '50px' }}
        />
        <p className="mb-0">
          Best Startup Award By IIM Sambhalpur | Safe & Secure | Trusted by 50K+ Parents
        </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Trusted;
