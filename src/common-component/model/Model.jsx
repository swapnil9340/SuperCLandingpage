import React, { useState } from 'react';

const RegistrationForm = () => {
  const [open, setOpen] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);

  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    mobile: '',
    email: '',
    grade: '',
    plan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleMobileBlur = () => {
    if (/^[0-9]{10}$/.test(formData.mobile)) {
      setShowOTP(true);
      alert('OTP sent to ' + formData.mobile);
    } else {
      setShowOTP(false);
    }
  };

  const handleOtpSubmit = () => {
    if (otpValue === '1234') {
      setOtpVerified(true);
      alert('OTP Verified!');
    } else {
      alert('Invalid OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      'childName',
      'parentName',
      'mobile',
      'email',
      'grade',
      'plan',
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill ${field}`);
        return;
      }
    }

    if (!otpVerified) {
      alert('Please verify OTP before submitting');
      return;
    }

    console.log('Submitted:', formData);
    alert('Form Submitted!');
    setOpen(false);
  };

  return (
    <>
      {/* 🔘 Your Custom Trigger Button */}
      <button
        type="button"
        className="btn me-2"
        style={{
          background: '#1779A8',
          color: '#fff',
          borderRadius: '0px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        onClick={() => setOpen(true)}
      >
        <img src="/R-now.svg" alt="Enroll Icon" />
        Enroll Now For Free
      </button>

      {/* Modal */}
      {open && (
        <div
          style={{
                  
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#fff',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            maxHeight: '100vh',
            overflowY: 'auto',
            padding: '30px',
            zIndex: 1000,
        
          }}
        >
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                fontSize: '24px',
         
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </div>

          {/* Form */}
          <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>Register for Math Olympiad</h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                name="childName"
                placeholder="Child's Name *"
                value={formData.childName}
                onChange={handleChange}
                required
              />

              <label>Class / Grade *</label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[1, 2, 3, 4, 5, 6, 7].map((grade) => (
                  <button
                    type="button"
                    key={grade}
                    onClick={() => handleSelect('grade', grade)}
                    style={{
                      padding: '8px 12px',
                      background: formData.grade === grade ? '#e8f0fe' : '#fff',
                      border: formData.grade === grade ? '2px solid #3f51b5' : '1px solid #ccc',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    {grade}
                  </button>
                ))}
              </div>

              <input
                type="text"
                name="parentName"
                placeholder="Parent's Name *"
                value={formData.parentName}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                value={formData.mobile}
                onChange={handleChange}
                onBlur={handleMobileBlur}
                required
              />
              <small>OTP will be sent to this number</small>

              {showOTP && !otpVerified && (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    maxLength="4"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleOtpSubmit}
                    style={{
                      padding: '6px 12px',
                      background: '#3f51b5',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Verify OTP
                  </button>
                </div>
              )}

              {otpVerified && <span style={{ color: 'green' }}>✅ OTP Verified</span>}

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Select Plan *</label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Free Enrolment (₹0)', value: 'free' },
                  { label: 'Olympiad + Mock Test (₹99)', value: 'mock' },
                  { label: 'Olympiad + Unlimited Practice (₹149)', value: 'unlimited' },
                ].map((plan) => (
                  <button
                    type="button"
                    key={plan.value}
                    onClick={() => handleSelect('plan', plan.value)}
                    style={{
                      padding: '8px 12px',
                      background: formData.plan === plan.value ? '#e8f0fe' : '#fff',
                      border: formData.plan === plan.value ? '2px solid #3f51b5' : '1px solid #ccc',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '20px',
                  padding: '12px',
                  background: 'linear-gradient(to right, rgba(251, 93, 0, 1), rgba(188, 57, 150, 1))',
                  color: '#fff',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Submit & Continue →
              </button>
            </form>
          </div>
        </div>
      )}

    
    </>
  );
};

export default RegistrationForm;
