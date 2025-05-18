import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SuperCAppSection = () => {
  return (
    <Container fluid className="SuperCAppSection py-5 bg-white d-flex align-items-center justify-content-center" >
      <Row className="SuperCAppSectionRow d-flex align-items-center justify-content-center  " style={{ width: "80%" }}>
        {/* Left: Mobile App Images */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <h3 className='mobileTitle'>
            Get Olympiad-Ready with  <span style={{ color:"#1779A8" }}>SuperC App & Web!</span>
          </h3>

          <img
            src="/appImg.svg" // Replace with the actual image path
            alt="SuperC App Screens"
            className="img-fluid m-Img"
            style={{ maxWidth: '80%' }}
          />
        </Col>

        {/* Right: Text Content */}
        <Col md={5} className="px-4">
          <h3 className='deskTitle' style={{fontSize : "32px" ,fontWeight : 400}}>
            Get Olympiad-Ready with <br /> <span style={{ color:"#1779A8"}}>SuperC App & Web!</span>
          </h3>

          <div className='d-flex flex-column gap-4'>
            <div className="mt-md-4">
              <h5 className="mb-2" style={{fontWeight : 400}}>SuperC App:</h5>
              <div className='ul-img d-flex justify-content-between'>
                <div className=' d-flex'>
                  <img className='mobileImg' src="/app1.svg" />
                  <ul style={{ marginBottom: 0, flex: 1 }}>
                    <li className="mb-2 d-flex align-items-start">
                      <span>Daily quizzes & practice questions</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <span>Leaderboards to stay competitive</span>
                    </li>
                  </ul>
                </div>
                <div className='position-relative '>
                <Button type='btn' style={{ background: "#14516E", color: "#fff", borderRadius: "0px", alignSelf: "center", width: "150px" ,border :"none" }} className=" mt-2">Download App</Button>
              </div>
              </div>

            </div>

            <div className="mt-md-4">
              <h5 className="mb-2" style={{fontWeight : 400}}>Website:</h5>
              <div className='ul-img d-flex justify-content-between'>
                <div className='d-flex'>
                  <img className='globImg' src="/app3.svg" />
                  <ul style={{ marginBottom: 0, flex: 1 }}>
                    <li className="mb-2 d-flex align-items-start">

                      <span>Topic-wise practice sets</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <span>Smart tricks & revision hacks</span>
                    </li>
                  </ul>
                </div>
                <div className='position-relative '>
                  <img src="/app2.svg" className='d-none d-lg-block' style={{ position: "absolute", bottom: "84%", left: "-20%" }} />
                  <Button type='btn' style={{ background: "#14516E", color: "#fff", borderRadius: "0px", alignSelf: "center", width: "150px" ,border :"none" }} className="mt-2">Visit Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SuperCAppSection;
