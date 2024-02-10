import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import AppURL from '../../api/AppURL';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    newpassword: '',
    confirmpassword: '',
    token: '' 
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data 
    if (formData.email.length === 0 || formData.newpassword.length === 0 || formData.confirmpassword.length === 0 || formData.token.length === 0) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.newpassword !== formData.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    // Form data is valid, proceed with sending the request to reset password
    axios.post(`${AppURL.ResetPassword}`, formData)
      .then((response) => {
        console.log(response.data);
        navigate('/login');
      })
      .catch((error) => {
        if (error.response) {
          console.error('Reset password failed:', error.response.data);
          alert('Reset password failed. Please try again.');
        } else {
          console.error('Error occurred while resetting password:', error.message);
          alert('An error occurred while resetting password. Please try again later.');
        }
      });
  };

  return (
    <div>
      <Container className='p-0 m-0 overflow-hidden' fluid={true}>
        <Row>
          <Col lg={9} md={9} sm={12}>
            <div className='d-flex justify-content-center m-auto' id='forgotpass'>
              <div className='mt-5'>
                <Form onSubmit={handleSubmit} id="signUpForm" className='onboardForm'>
                  <h1 className='text-center'>Reset Password</h1>
                  <div className="m-auto">
                    <Form.Control type="email" className='signup-input mx-3' name='email' placeholder='Email address' value={formData.email} onChange={handleChange} required />
                    <Form.Control type="password" name='newpassword' className='login-input' placeholder='New Password' value={formData.newpassword} onChange={handleChange} />
                    <Form.Control type="password" name='confirmpassword' className='login-input' placeholder='Confirm Password' value={formData.confirmpassword} onChange={handleChange} />
                    <Form.Control type="hidden" name='token' value={formData.token} onChange={handleChange} />
                    <Button id="sendBtn" type='submit' className='login-button mt-4' variant="danger" size="lg">
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
