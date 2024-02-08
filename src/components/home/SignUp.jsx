import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Effect to fetch email value from HomeTop page
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setFormData({ ...formData, email: storedEmail });
        }
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    // Function to handle input changes
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     // setLoading(true);
    //     const res = await fetch(`${AppURL.Register}`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });
    //     const data = await res.json();
    //     // if (data.success === false) {
    //     //   setLoading(false);
    //     //   setError(data.message);
    //     //   return;
    //     // }
    //     // setLoading(false);
    //     // setError(null);
    //     navigate('/login')
    //   } catch (error) {
    //     // setLoading(false);
    //     console.log(error);
    //   }
    // };

    // Function to handle form submission
   
   
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send form data to backend
            const response = await axios.post(`${AppURL.Register}`, formData, {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            if (response.status === 201) {
                console.log("helooo");
                // Redirect to login page and pass form data as state
                navigate('/login', {
                    state: formData
                });
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('Email already exists');
            } else {
                alert('Internal server error');
            }
        }
    };

    // Function to handle form submission
// const handleSubmit = async (event) => {
//   event.preventDefault();

//   try {
//       // Send form data to backend
//       const response = await axios.post(`${AppURL.Register}`, formData, {
//           headers: {
//               'Content-Type' : 'application/json'
//           }
//       });

//       // Check response status
//       if (response.status === 201) {
//           // Signup successful
//           navigate('/login', {
//               state: formData
//           });
//       } else if (response.status === 400) {
//           // Validation error
//           const errorMessage = response.data.message || 'Invalid data provided';
//           alert(errorMessage);
//       } else {
//           // Other errors
//           alert('Something went wrong');
//       }
//   } catch (error) {
//       // Handle errors
//       if (error.response) {
//           // Request made and server responded with an error status code
//           if (error.response.status === 400) {
//               // Bad request, validation error
//               const errorMessage = error.response.data.message || 'Invalid data provided';
//               alert(errorMessage);
//           } else if (error.response.status === 401) {
//               // Unauthorized, user not authenticated
//               alert('Unauthorized access');
//           } else if (error.response.status === 500) {
//               // Internal server error
//               console.error('Internal server error:', error.response.data);
//               alert('Internal server error. Please try again later.');
//           } else {
//               // Other error status codes
//               console.error('Error:', error.response.data);
//               alert('Something went wrong');
//           }
//       } else if (error.request) {
//           // Request made but no response received
//           console.error('No response from server:', error.request);
//           alert('No response from server. Please try again later.');
//       } else {
//           // Other errors
//           console.error('Error setting up request:', error.message);
//           alert('Error setting up request. Please try again later.');
//       }
//   }
// };


    return (
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row>
                <Col lg={9} md={9} sm={12}>
                    <div className='m-auto' id='home'>
                        <div className='d-flex justify-content-between mt-5'>
                            <h1 className='brand-name mx-5'>MOVEFLIX</h1>
                        </div>
                        <div id="signup" className="text-center text-white m-auto">
                            <Row className='text-white'>
                                <Col className='m-auto d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                                    <div className="m-auto">
                                        <Form onSubmit={handleSubmit} className='onboardForm' id="">
                                            <h4 className=''>SIGN UP </h4>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control type="text" name='name' className="signup-input" placeholder='Enter Your Name' onChange={handleChange} />
                                                <Form.Control type="email" name='email' className="signup-input mt-4" placeholder='Enter Your Email' value={formData.email} />
                                                <Form.Control type="password" name="password" className='signup-input mt-4' placeholder='Password' onChange={handleChange} />
                                                <Button type='submit' className="login-button mt-4" size="lg" variant='danger'> Sign Up </Button>
                                            </Form.Group>
                                            <h4 className=''>Already have an account? <Link to="/login" className='text-light text-decoration-none'>Login here.</Link></h4>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row> 
        </Container>
    );
}

export default SignUp;
