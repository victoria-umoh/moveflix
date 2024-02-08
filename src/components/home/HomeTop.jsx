import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import AppURL from '../../api/AppURL';

const HomeTop = () =>  {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the email from local storage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []); 

  const emailOnChange = (event) =>{
    let email = event.target.value;
    setEmail(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    if (email.length === 0) {
      alert("Enter your email");
    } else {
      localStorage.setItem('email', email);
      navigate('/signup'); // Redirect to login page
    }

    // if(email.length===0){
    //   alert("enter your email");
    // } else {
    //   axios.post(`${AppURL.GetStarted}`, {email: email })
    //     .then((response) =>{
    //       if(response.status === 200){
    //          alert('success');
    //          localStorage.setItem('email', response.data.email);
    //         navigate('/signup');
    //       } else {
    //         alert('Something went wrong');
    //       }
    //     })
    //     .catch(error => {
    //       if(error.response.status === 400){
    //         alert('Email already exists');
    //       } else {
    //         alert('Internal server error');
    //       }
    //     });
    // }
  };

  return (
    <>
      <Container className='p-0 m-0 overflow-hidden' fluid={true}>
        <Row>
          <Col lg={9} md={9} sm={12}>
            <div className='m-auto' id='home'>
              <div className='d-flex justify-content-between mt-5'>
                <h1 className='brand-name mx-5'>MOVEFLIX</h1>
                <Button className='buttons btn-danger text-light me-5' variant="primary" size="lg" style={{ borderRadius: '5px' }}>
                  <Link className='text-light text-decoration-none' to="/login">
                    Sign In
                  </Link>
                </Button>
              </div>

              <div className="text-center text-white m-auto">
                <h1 className='content-head'>Unlimited movies, TV shows, and more</h1>
                <p className='content-items'>Watch anywhere. Cancel anytime.</p>
                <p className='content-items'>Ready to watch? Enter your email to create or restart your membership.</p>

                <Form onSubmit={handleSubmit} id="signUpForm" className='onboardForm m-auto'>
                  <div className="d-flex justify-content-center">
                    <Form.Control onChange={emailOnChange} type="email" className='signup-input mx-3' name='email' placeholder='Email address' value={email} required />
                  
                    <Button id="sendBtn" type='submit' className='login-button rounded-5' variant="danger" size="lg">
                      Get Started
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeTop;
