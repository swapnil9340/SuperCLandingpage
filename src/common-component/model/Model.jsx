import React, { useState } from 'react';

const RegistrationForm = ({
  triggerLabel = "Enroll Now",
  buttonIcon = "/R-now.svg",
  title = "Register for Math Olympiad",
  grades = [1, 2, 3, 4, 5, 6, 7],
  plans = [
    { label: 'Free Enrolment (₹0)', value: 'free' },
    { label: 'Olympiad + Mock Test (₹99)', value: 'mock' },
    { label: 'Olympiad + Unlimited Practice (₹199)', value: 'unlimited' },
  ]
}) => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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




  const handleSubmit = (e) => {
    e.preventDefault();
    const required = ['childName', 'parentName', 'mobile', 'email', 'grade', 'plan'];
    for (let field of required) {
      if (!formData[field]) {
        alert(`Please fill ${field}`);
        return;
      }
    }
    

    console.log({ ...formData, triggerLabel });
    setFormSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFormSubmitted(false);
    setFormData({
      childName: '',
      parentName: '',
      mobile: '',
      email: '',
      grade: '',
      plan: '',
    });
    setOtpVerified(false);
    setShowOTP(false);
    setOtpValue('');
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        style={{
          margin: '10px',
          padding: '10px 20px',
          background: '#1779A8',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {buttonIcon && <img src={buttonIcon} alt="icon" style={{ height: 18 }} />}
        {triggerLabel}
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
              onClick={handleClose}
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

          <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            <p style={{ textAlign: 'center' }}>Source: <strong>{triggerLabel}</strong></p>

            {formSubmitted ? (
              <div style={{ textAlign: 'center' }}>
                <img
                  src="/Thankyou.jpg"
                  alt="Thank You"
                  style={{ maxWidth: '300px', margin: '20px auto' }}
                />
                <h3 style={{ marginTop: '20px' }}>Thank you for registering!</h3>
                <p>We'll be in touch soon with more details.</p>
                <button
                  onClick={handleClose}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: '#1779A8',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" name="childName" placeholder="Child's Name *" value={formData.childName} onChange={handleChange} />
                <label>Class / Grade *</label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {grades.map((grade) => (
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

                <input type="text" name="parentName" placeholder="Parent's Name *" value={formData.parentName} onChange={handleChange} />
                <input type="tel" name="mobile" placeholder="Mobile Number *" value={formData.mobile} onChange={handleChange} />
              
            

                

                <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} />

                <label>Select Plan *</label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {plans.map((plan) => (
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
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
