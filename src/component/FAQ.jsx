import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const faqs = [
  {
    question: 'Is the exam online?',
    answer: 'Yes, students can take the test from home on any smartphone/tablet.',
  },
  {
    question: 'Is registration free?',
    answer: 'Registrations are now only at 299/- with free unlimited practice sets.',
  },
  {
    question: 'What is the syllabus based on?',
    answer: 'It aligns with school curriculum and Olympiad-level logic & reasoning.',
  },
  {
    question: 'How is the winner selected?',
    answer: 'The top scorer across India wins the London trip.',
  },
];

const FAQ = () => {
  return (
    <div  className="py-5 mt-5 faqContainer" style={{background :"#E4F4FC"}}>
      <Container >
        <h2 className="text-center mb-MD-5" style={{fontWeight : 400}}>
          Frequently Asked <span style={{color : "#14516E"}}>Questions</span>
        </h2>
        {faqs.map((faq, idx) => (
          <Row  key={idx} className="faqRow align-items-center py-3 " style={{borderBottom :"2px solid #BFBFBF"}}>
            <Col xs={12} md={6} className="d-flex align-items-center gap-3">
              <img src={"/que.svg"} style={{width : "36px"}}/>
              <strong>{faq.question}</strong>
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center gap-3 mt-2 mt-md-0">
              <img src={"/ans.svg"} style={{width : "36px"}}/>
              <span>{faq.answer}</span>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default FAQ;
