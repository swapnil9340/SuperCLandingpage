import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Challenge = () => {
  return (
    <Container fluid className="challengeContainer p-4 d-flex flex-column justify-content-center align-items-center position-relative "  style={{backgroundColor :"#E4F4FC"}}>
      <Row className="challengeFirstRow align-items-center mt-5 justify-content-around " style={{width :"80%" ,marginBottom :"100px" }}>
        <Col md={5} className="mb-4 mb-md-0">
          <div className="position-relative">
            <img
              src="/challenge.png" // Replace with actual path
              alt="How to Participate"
              className="img-fluid"
            />
            <div className="v-play position-absolute text-white p-2  d-flex flex-column" style={{ bottom: '10px', left: '10px' }}>
            <img src='/videoIcon.svg' style={{width :"80px" ,height :"80px"}}/>
              <p>How to Participate <br/> & Win – Watch in <br/> 60 Seconds!</p>
            </div>
          </div>
        </Col>

        <Col md={5}>
          <p className='steps' style={{fontSize :"32px"}}>
            How to Participate & Win  <br/>Watch in <span style={{ color : "#1779A8"}}>60 Seconds</span>!
          </p>
          <ol className="ps-3" style={{fontSize : "18px"}}>
            <li>Register on this page</li>
            <li>Download the SuperC App / Visit our YouTube Channel</li>
            <li>Prepare daily with quizzes and videos</li>
            <li>Take the exam from home on 15th July</li>
            <li>Top scorer wins a London Trip for student + parents</li>
          </ol>
          <Button type='btn' style={{background :"#14516E", color : "#fff" , borderRadius :  "0px" ,border :"none"}} >Join the Challenge</Button>
        </Col>
      </Row>

      <Row className="challengeSecRow text-center position-absolute"  style={{width :"70%" ,bottom :"-10%" }}>
        <Col md={4} >
          <Card className=" shadow-sm">
            <Card.Body className='d-flex challengeCard justify-content-evenly align-items-center'>
              <div>
              <img src='/chall-3.svg'/>
              </div>
              <Card.Title style={{color : '#212529' ,fontWeight :300}}>Exam Date: <br/> <strong style={{color :"#0F6E9B" ,fontWeight :500}}>15 July 2025</strong></Card.Title> 
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className=" shadow-sm">
            <Card.Body className='challengeCard d-flex justify-content-evenly align-items-center'>
              <div >
                <img src='/chall-2.svg'/>
              </div>
              <Card.Title style={{color :"#0F6E9B"}}>2nd to 6th Grade</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} >
          <Card className=" shadow-sm ">
            <Card.Body className='challengeCard d-flex justify-content-evenly align-items-center'>
              <div >
              <img src='/chall-1.svg'/>
              </div>
              <Card.Title style={{color :"#0F6E9B"}}>Trip to London</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Challenge;
