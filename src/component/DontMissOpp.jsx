import React from 'react';
import { Container } from 'react-bootstrap';

const DontMissOpp = () => {
  return (
    <Container fluid className=" DontMissOpp text-center text-white py-5" style={{ backgroundColor: '#15566f' }}>
      <h4 className="mb-3" style={{fontSize : "32px" ,fontWeight : 400}}>
        Don’t Let Your Child Miss This Once-in-a-Lifetime Opportunity!
      </h4>
      <p className="mb-0" style={{fontSize : "24px" ,fontWeight : 200}}>
        Register Now → Prepare Daily → Score High → Travel to London with Your Child!
      </p>
    </Container>
  );
};

export default DontMissOpp;
