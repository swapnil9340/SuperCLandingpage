import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const syllabusData = [
  { class: '2nd', sections: ['Arithmetic, Reasoning'] },
  { class: '3rd', sections: ['Numbers, Shapes, Time'] },
  { class: '4th', sections: ['Fractions, Reasoning'] },
  { class: '5th', sections: ['Algebra, Geometry'] },
  { class: '6th', sections: ['Advanced Arithmetic'] },
];

const topicsCovered = [
  { label: 'Percentages', icon: 's3.svg' },
  { label: 'Logic', icon: '' },
  { label: 'Graphs', icon: 's2.svg' },
  { label: 'Mental Maths', icon: 's1.svg' },
];

const SyllabusOverview = () => {
  return (
    <div className="SyllabusOverview container  py-md-5" style={{marginTop : "100px"}}>
      <h2 className="text-center  mb-3" style={{fontWeight : 400}}>
        Olympiad <span style={{color :"#14516E"}}>Structure & Syllabus Overview</span>
      </h2>
      <div className="text-center text-secondary mb-4" >
        <span className="me-3" style={{color :"#0F6E9B"}}>30 Questions</span> |
        <span className="mx-3" style={{color :"#0F6E9B"}}>45 Minutes</span> |
        <span className="mx-3" style={{color :"#0F6E9B"}}>No Negative Marking</span> |
        <span className="ms-3" style={{color :"#0F6E9B"}}>Online Test Platform</span>
      </div>

      <h4 className="text-center mt-4 mb-3" style={{color : "#212529" ,fontWeight : 400}}>Syllabus Breakdown:</h4>

      <div >
        <table className="table table-bordered align-middle text-center">
          <thead className=" text-white">
            <tr >
              <th style={{ backgroundColor: "#FB5D00", color: "#fff", fontSize: "24px", fontWeight: 300 }}>Class</th>
              <th style={{ backgroundColor: "#FB5D00", color: "#fff", fontSize: "24px", fontWeight: 300 }}>Sections</th>
              <th style={{ backgroundColor: "#FB5D00", color: "#fff", fontSize: "24px", fontWeight: 300 }}>Topics Covered</th>
            </tr>
          </thead>
          <tbody>
            {syllabusData.map((item, idx) => (
              <tr className='bodyRow' key={idx}>
                <td style={{ borderBottom: idx !== syllabusData.length - 1 && "1px solid  #fff" }}>{item.class}</td>
                <td style={{ borderBottom: idx !== syllabusData.length - 1 && "1px solid  #fff" }}>
                  {item.sections.map((sec, i) => (
                    <div
                      key={i}
                      className=" border px-2 py-1 my-1 d-inline-block"
                      style={{ fontWeight: "300", backgroundColor: "#E5F7FF", border: "1px solid #AED8EB" }}
                    >
                      {sec}
                    </div>
                  ))}
                </td>
                {idx === 0 && (
                  <td rowSpan={syllabusData.length} >
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                      <div className="  mb-2 fw-semibold" style={{ color: "#FB5D00" }}>Advanced Arithmetic</div>
                      <div className="row syllabusRow" style={{ width: "80%" }}>
                        {topicsCovered.map((topic, i) => (
                          <div className="arth-card col-md-6 my-2 d-flex align-items-center justify-content-center" key={i}>
                            <img src={topic.icon} />
                            <small>{topic.label}</small>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SyllabusOverview;
