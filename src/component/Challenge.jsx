import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import RegistrationForm from '../common-component/model/Model';

const Challenge = () => {
  return (
    <Container fluid className="challengeContainer p-4 d-flex flex-column justify-content-center align-items-center position-relative " style={{ backgroundColor: "#E4F4FC" }}>
      <Row className="challengeFirstRow align-items-center mt-5 justify-content-around " style={{ width: "80%", marginBottom: "100px" }}>
        <Col md={5} className="mb-4 mb-md-0">
          <div className="position-relative">
            <video width="100%" height="380" controls>
              <source src="/thesuperc.mp4" type="video/mp4" />
            </video>
           
            <div className="v-play position-absolute text-black p-2  d-flex flex-column" style={{ bottom: '10px', left: '10px' }}>
              <img src='/videoIcon.svg' style={{ width: "80px", height: "80px" }} />
              <p>How to Participate <br /> & Win – Watch in <br /> 30 Seconds!</p>
            </div>
          </div>
        </Col>

        <Col md={5}>
          <p className='steps' style={{ fontSize: "32px" }}>
            How to Participate & Win  <br />Watch in <span style={{ color: "#1779A8" }}>30 Seconds</span>!
          </p>
          <ol className="ps-3" style={{ fontSize: "18px" }}>
            <li>Register on this page</li>
            <li>Download the SuperC App / Visit our YouTube Channel</li>
            <li>Prepare daily with quizzes and videos</li>
            <li>Take the exam from home on 21 September 2025</li>
            <li>Top scorer wins a London Trip for student + parents</li>
          </ol>
      <RegistrationForm triggerLabel="Enroll Now For Free" />
       <RegistrationForm triggerLabel="Mock Test for 99" /> 
          <RegistrationForm triggerLabel="Mock Plans + Unlimited Questions for 199" />
        </Col>
      </Row>

      <Row className="challengeSecRow text-center position-absolute" style={{ width: "70%", bottom: "-10%" }}>
        <Col md={4} >
          <Card className=" shadow-sm">
            <Card.Body className='d-flex challengeCard justify-content-evenly align-items-center'>
              <div>
                <img src='/chall-3.svg' />
              </div>
              <Card.Title style={{ color: '#212529', fontWeight: 300 }}>Exam Date: <br /> <strong style={{ color: "#0F6E9B", fontWeight: 500 }}>21 September 2025</strong></Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className=" shadow-sm">
            <Card.Body className='challengeCard d-flex justify-content-evenly align-items-center'>
              <div >
                <img src='/chall-2.svg' />
              </div>
              <Card.Title style={{ color: "#0F6E9B" }}>2nd to 6th Grade</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} >
          <Card className=" shadow-sm ">
            <Card.Body className='challengeCard d-flex justify-content-evenly align-items-center'>
              <div >
                <img src='/chall-1.svg' />
              </div>
              <Card.Title style={{ color: "#0F6E9B" }}>Trip to London</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Challenge;
