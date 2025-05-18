import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutOlympiad = () => {
    return (
        <Container  className="AboutOlympiadContainer py-md-5 0  bg-white d-flex flex-column align-items-center justify-content-center" style={{marginTop :"100px"}}>
            <Row className="d-flex align-items-center justify-content-between" >
                {/* Text Section */}
                <Col md={6} className="mb-4 mb-md-0 px-4" >
                    <p className='AboutOlympiadTitle' style={{fontSize :"32px"}}>
                        What is the <span style={{color:"#1779A8"}}>SuperC National Maths Olympiad?</span>
                    </p>
                    <p className="text-muted description" style={{color :"#212529" ,fontSize :"18px"}}>
                        SuperC’s Olympiad is a national-level online maths competition designed for children from Classes 2 to 6.
                        It fosters problem-solving, logical thinking, and fun learning – all from the comfort of home.
                    </p>
                    <ul className="list-unstyled contentList " style={{fontSize :"20px"}}>
                        <li className="mb-3 d-flex align-items-center">
                            <img src='/img5.svg' />
                            <span style={{marginLeft :"10px"}}>Conducted fully online</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center">
                            <img src='/img6.svg' />
                            <span style={{marginLeft :"8px"}}>45-minute MCQ-based test</span>
                        </li>
                        <li className="d-flex align-items-center">
                            <img src='/img7.svg' />
                            <span style={{marginLeft :"16px"}}>Instant results + e-Certificates</span>
                        </li>
                    </ul>
                </Col>

                {/* Image Section */}
                <Col md={6} className="text-end">
                    <img
                        src="/mobileimg.png" // Replace with the actual path to your image
                        alt="SuperC Olympiad App"
                        className="img-fluid mobileImg"
                        style={{ maxWidth: '80%' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutOlympiad;
