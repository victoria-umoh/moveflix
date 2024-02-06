// import React, { useState, Component } from 'react'
// import { Container, Row, Col, Button, Form } from 'react-bootstrap'
// import Validation from '../../validation/Validation';
// import AppURL from '../../api/AppURL';
// // import { useHistory } from 'react-router-dom';

// export class SignUp extends Component {

//   componentDidMount(){
//     window.scroll(0,0);
//   }

//   constructor() {
//     super();

//     this.state={
//       name: "",
//       email: "",
//       password: ""
//     }
//   }

  
//   // const [name, setName] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');

// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [open, setOpen] = useState(false);

// //   const history = useHistory();


//   nameOnChange = (event)=>{
//     let name = event.target.value;
//     this.setState({name:name});
//   }

//   emailOnChange = (event)=>{
//     let email = event.target.value;
//     this.setState({email:email});
//   }
  
//   passwordOnChange = (event)=>{
//     let password = event.target.value;
//     this.setState({password:password});
//   }

//   // submit form data
//    handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const formJson = Object.fromEntries((formData).entries());
//     setLoading(true);
//     fetch(`${AppURL}/user/signup`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formJson),
//     })
//         .then((response) => {
//             if (!response.ok) {
//                console.log(`Something went wrong ${response.status}`);
//                handleError("Something went wrong");
//             }
//             return response.json();
//         })
//         .then(response => {
//             console.log('Server Response:', response);
//             if (response.status_code) {
//                 console.log('Status Code:', response.status_code);
//                 if (response.status_code === 200) {
//                   Validation.setToken(response.token);
//                    console.log(response.data);
//                    Validation.setData(response.user);
//                    header('/account/verification');
//                 } else {
//                     console.error('Error Message:', response.message || 'Unexpected error');
//                     handleError(response.message || 'Unexpected error');
//                     setOpen(true);
//                 }
//             } else {
//                 console.error('Unexpected Response Format:', response);
//                 handleError('Unexpected response format');
//                 setOpen(true);
//             }
//         })
//         .catch(error => {
//             console.error('Catch Block Error:', error);
//             setLoading(false); // stop the loading
//             setOpen(true); // show the error snackbar
//             handleError('Something went wrong, please try again');
//         })
//         .finally(() => {
//             setLoading(false);
//         });
        
//   }

  
//   render() {
//     return (
//       <>
//         <Container>
//             <Row className='p-2'>
//                 <Col className='shadow-sm bg-white mt-2' md={6} lg={6} sm={12} xs={12}>

//                     <Row className='text-center'>
//                         <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
//                             <Form onSubmit={handleSubmit} className='onboardForm' id="signInForm">
//                                 <h4 className='section-title-login'>SIGN UP </h4>
//                                 <h6 className='section-sub-title'> Please Enter Your Email </h6>

//                                 <Form.Control onChange={this.nameOnChange} type="text" name='name' className="signup-input" placeholder='Enter Your Name' />
//                                 <Form.Control onChange={this.emailOnChange} type="email" name='email' className="signup-input mt-2" placeholder='Enter Your Email' />
//                                 <Form.Control onChange={this.passwordOnChange} type="password" className='signup-input mt-2' placeholder='Password' />
//                                 <Button type='submit' className="signup-btn" variant='danger'> Sign Up </Button>
//                             </Form>
//                             <Button onClick={() => history.push('/login')} >Already have an account? Login here.</Button>
//                         </Col>

//                         {/* <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
//                             <img className='onboardBanner' src={Login} alt="" />
//                         </Col> */}
//                     </Row>

//                 </Col>
//             </Row>
//         </Container>
//       </>
//     )
//   }
// }

// export default SignUp
