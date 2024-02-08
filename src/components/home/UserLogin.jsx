import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${AppURL.Login}`, formData)
            .then((response) => {
                console.log(response.data);
                navigate('/movies');
            })
            .catch((error) => {
                if (error.response) {
                    console.error('Login failed:', error.response.data);
                    alert('Login failed. Please check your email and password.');
                } else if (error.request) {
                    console.error('No response from server:', error.request);
                    alert('No response from server. Please try again later.');
                } else {
                    console.error('Error setting up request:', error.message);
                    alert('Error setting up request. Please try again later.');
                }
            });
    };

    return (
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row>
                <Col lg={9} md={9} sm={12}>
                    <div className='m-auto' id='home'>
                        <div className='d-flex justify-content-between mt-5'>
                            <h1 className='brand-name mx-5'>MOVEFLIX</h1>
                        </div>

                        <div id="login" className="text-center text-white m-auto">
                            <Row className='text-white'>
                                <Col className='m-auto' md={6} lg={6} sm={12} xs={12}>
                                    <div className="">
                                        <Form onSubmit={handleSubmit} className='onboardForm'>
                                            <h1 className='text-left'> Sign In </h1>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Control
                                                    type="text"
                                                    name='email'
                                                    className='login-input'
                                                    placeholder='Enter Your Email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                <Form.Control
                                                    type="password"
                                                    name='password'
                                                    className='login-input'
                                                    placeholder='Password'
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                                <Button type='submit' className='login-button mt-2' variant="danger" size="lg">Login</Button>
                                            </Form.Group>
                                            <p><Link to='/forgotPassword' className='forgotpass'>Forgot Password?</Link></p>
                                            <Form.Group className="mb-3">
                                                <Form.Check type="checkbox" name='remember_me' label="Remember Me" />
                                            </Form.Group>
                                            <h5 className=''>New to Netflix? <Link to='/signup' className='text-decoration-none' >Sign up now</Link> </h5>
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
};

export default UserLogin;
