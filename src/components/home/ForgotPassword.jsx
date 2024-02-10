// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios'; // Import Axios for making HTTP requests
// import AppURL from '../../api/AppURL';


// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate email format
//     if (!isValidEmail(email)) {
//       setError('Invalid email format');
//       return;
//     }

//     try {
//       setLoading(true);
//       // Send request to backend to initiate password reset
//       const response = await axios.post(`${AppURL.ForgotPassword}`, { email });
//       console.log(response.data); // Assuming backend responds with success message
//       history.push('/password-reset-email-sent'); // Redirect to confirmation page
//     } catch (error) {
//       console.error('Forgot password failed:', error.response.data);
//       setError('Forgot password failed. Please try again.'); // Display error message
//     } finally {
//       setLoading(false);
//     }
//   };

//     // Function to validate email format
//     const isValidEmail = (email) => {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h2>Forgot Password</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="email">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email" value={email} onChange={handleChange} required />
//               {error && <Form.Text className="text-danger">{error}</Form.Text>}
//             </Form.Group>
//             <Button variant="primary" type="submit" disabled={loading}>
//               {loading ? 'Loading...' : 'Submit'}
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ForgotPassword;
