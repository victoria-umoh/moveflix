import React, { Component } from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap'
import Validation from '../../validation/Validation'
import axios from 'axios'
import AppURL from '../../api/AppURL';

export class Contact extends Component {
    constructor(){
        super();
        
        this.state={
            name: "",
            email: "",
            message: ""
        }
    }

    nameOnChange = (event)=>{
        let name = event.target.value;
        // alert(name);
        this.setState({name:name});
    }
    emailOnChange = (event)=>{
        let email = event.target.value;
        // alert(email);
        this.setState({email:email});
    }
    messageOnChange = (event)=>{
        let message = event.target.value;
        // alert(message);
        this.setState({message:message});
    }
   
    onFormSubmit = (event)=>{

        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        let sendBtn = document.getElementById('sendBtn');
        let contactForm = document.getElementById('contactForm');

        if (message.length===0) {
            alert("Enter your message");
        }else if(name.length===0){
            alert("Enter your name");
        }else if(email.length===0){
            alert("Enter your email");
        }else if(!(Validation.NameRegx).test(name)){
            alert("invalid Name");
        }else{
            
            sendBtn.innerHTML = "sending...";
            let MyFormData = new FormData();
            MyFormData.append("name",name);
            MyFormData.append("email",email);
            MyFormData.append("message",message);
            
                axios.post(AppURL.PostContact,MyFormData)
                .then(function (response){
                        if (response.status===200 && response.data===1) {
                            alert("Message sent successfully");
                            sendBtn.innerHTML = "Send";
                            contactForm.reset();
                        } else {
                            alert("unable to send message");
                            sendBtn.innerHTML = "Send";
                        }
                    }).catch(function (error){
                        alert(error);
                        sendBtn.innerHTML = "Send";
                    });
        }
         
        event.preventDefault();
    }
  render() {
    return (
        <>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>

                        <Row className='text-center'>
                            <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                                <Form onSubmit={this.onFormSubmit} className='onboardForm' id="contactForm">
                                    <h4 className='section-title-login'>CONTACT US</h4>

                                    <h6 className='section-sub-title'> Please Contact Us </h6>
                                    <input onChange={this.nameOnChange} type="text" className='form-control m-2' placeholder='Enter Your Name' />
                                    <input onChange={this.emailOnChange} type="email" className='form-control m-2' placeholder='Enter Your Email' />
                                    <Form.Control onChange={this.messageOnChange} as="textarea" className='form-control m-2' rows={3} placeholder="Message" />
                                    <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
                                </Form>
                            </Col>

                            <Col className='p-0 m-0 Desktop' md={6} lg={6} sm={6} xs={6}>
                                <br></br><br></br>
                            <p className='section-title-contact'>125 Joy street Mowe Sheerwood </p>
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96712.53415798995!2d-74.16095541406249!3d40.75615866755062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sng!4v1704317861143!5m2!1sen!2sng" 
                            width="550" height="450" styles="border:0;" title="Google Maps"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
  }
}

export default Contact
