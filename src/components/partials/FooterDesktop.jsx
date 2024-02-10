import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/images/appleplay.png'
import Google from '../../assets/images/googleplay.png'

export class FooterDesktop extends Component {
  render() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const copyrightText = `© Copyright ${currentYear} by Victoria`;

    return (
      <>
        <div className='footerback m-0 mt-5 pt-3 bg-dark text-white'>
          <Container>
            
            <Row className='px-0 my-5 text-white'>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title text-white'> OFFICE ADDRESS </h5>
                <span>125 Joy street Mowe Sheerwood <br></br> Email: suppport@luxe-lane.com </span>
                <h5 className='footer-menu-title text-white'> SOCIAL LINK </h5>
                <span href=""><i className="fab m-1 h4 fa-facebook"></i></span>
                <span href=""><i className="fab m-1 h4 fa-instagram"></i></span>
                <span href=""><i className="fab m-1 h4 fa-twitter"></i></span>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> THE COMPANY </h5>
                <Link to="/" className="footer-link text-white">About Us </Link><br></br>
                <Link to="/" className="footer-link text-white">Company Profile</Link><br></br>
                <Link to="/contact" className="footer-link text-white">Contact Us</Link>
              </Col>

              <Col lg={3} md={3}  sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> MORE INFO </h5>
                <Link to="/purchase" className="footer-link">How to purchase </Link><br></br>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link><br></br>
                <Link to="/refund" className="footer-link">Refund Policy</Link>
              </Col>

              <Col lg={3} md={3} sm={6} xs={12} className='p-2'>
                <h5 className='footer-menu-title'> DOWNLOAD APPS </h5>
                <span><img src={Google} alt="" style={{width:"200px"}} /></span><br></br>
                <span href=""><img src={Apple} alt="" className='mt-2' style={{width:"200px"}} /></span><br></br>
                  Change Your Language <br></br>
                  <div className="" id="google_translate_element"></div>
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className='text-center m-0 pt-3 pb-1 bg-dark'>
            <Row>
            <h6 className='text-white'>{copyrightText}</h6>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default FooterDesktop
