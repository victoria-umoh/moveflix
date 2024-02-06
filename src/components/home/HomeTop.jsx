import React, { Component } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import AppURL from '../../api/AppURL';

class HomeTop extends Component {
  constructor() {
    super();

    this.state={
      email: ""
    }
  }

  emailOnChange = (event)=>{
    let email = event.target.value;
    this.setState({email:email});
  }


  handleSubmit = (event) => {
    // const navigate = useNavigate();

    let email = this.state.email;
    if(email.length===0){
      alert("enter your email");
    }else{

      /*
        const token = localStorage.getItem('token') // retrieve token from local storage
          fetch('url', {
            method: 'post',
            headers: {
              'Authorization': 'Bearer token'
            }
          })
      */

          let MyFormData = new FormData();

          let allForm = MyFormData.append("email",email);
          console.log( "helooo", allForm);

          axios.post(AppURL.GetStarted,MyFormData)
          .then(function (response){
                  if (response.status===201) {
                    //  localStorage.setItem('user', JSON.stringify(response.data.user));
                    //  localStorage.setItem('token', response.data.token);
                    console.log(response.data.user);

                    // const email = localStorage.getItem('')
                      alert("Message sent successfully");
                      // navigate('/signup');
                  } else {
                      alert("unable to send message");
                  }
              }).catch(function (error){
                  alert(error);
              });
  }
    event.preventDefault();
  };

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   let email = this.state.email;
  
  //   if (email.length === 0) {
  //     alert("Enter your email");
  //   } else {
  //     let MyFormData = new FormData();
  //     MyFormData.append("email", email);
  
  //     try {
  //       const response = await axios.post(AppURL.Register, MyFormData);
  
  //       if (response.status === 200 && response.data === 1) {
  //         alert("Message sent successfully");
  //       } else {
  //         alert("Unable to send message");
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   }
  // };
  
  render() {
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

                  <Form onSubmit={this.handleSubmit} id="signUpForm" className='onboardForm m-auto'>
                    <div className="d-flex justify-content-center">
                      <Form.Control onChange={this.emailOnChange} type="email" className='signup-input mx-3' name='email' placeholder='Email address' required />
                    
                      <Button id="sendBtn" type='submit' className='login-button rounded-5' variant="danger" size="lg">
                        Get Started
                      </Button>
                    </div>
                  </Form>

                  {/* {this.state.formSubmitted && (
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Form submitted successfully!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                  )} */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomeTop;
