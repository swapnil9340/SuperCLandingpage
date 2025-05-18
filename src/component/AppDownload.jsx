import React from 'react';
import { Container, Button } from 'react-bootstrap';

const AppDownload = () => {
  return (
    <Container fluid className="AppDownload py-5 text-center" style={{ backgroundColor: '#E4F4FC' }}>
      <img
        src="/appDownload.svg" // Replace with your actual image path
        alt="Gift Icon"
        className="mb-3"
        style={{ maxHeight: '100px' }}
      />
      <h3 style={{color: "#212529" ,fontSize : '32px' ,fontWeight : 400}}>
        App Download <span  style={{color : "#14516E"}}>Incentive</span>
      </h3>
      <Button type='btn' style={{background :"#14516E", color : "#fff" , borderRadius :  "0px"  ,border :"none"}}  className="mt-3">
        Claim Free Tests Now
      </Button>
    </Container>
  );
};

export default AppDownload;
