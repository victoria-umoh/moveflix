import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
// import Login from '../../assets/images/loginn.jpg'
// import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export class UserLogin extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }


  render() {
    return (
      <>
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
                              <Form action="" className='onboardForm '>
                                  <h1 className='text-left'> Sign In </h1>
                                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" name='email' className='login-input' placeholder='Enter Your Email' />
                                    <Form.Control type="password" className='login-input' placeholder='Password' />
                                    <Button type='submit' className='login-button m-2' variant="danger" size="lg">Login</Button>{' '}
                                  </Form.Group>
` `
                                  <p><Link to="/forgotPassword" className='forgotpass'>Forgot Password?</Link></p>

                                  <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" name='remember_me' label="Remember Me" />
                                  </Form.Group>

                                  <p className=''>New to Netflix? <Link to="/signup" >Sign up now</Link> </p>
                              </Form>

                              
                            </div>
                        </Col>
                    </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default UserLogin








