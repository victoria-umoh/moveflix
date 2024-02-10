import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Apple from '../../assets/images/appleplay.png'
import Google from '../../assets/images/googleplay.png'

export class FooterMobile extends Component {
  render() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const copyrightText = `© Copyright ${currentYear} by Victoria`;

    return (
      <>
        <div className='footerback m-0 mt-5 pt-3'>
          <Container className='text-center bg-dark text-white'>
            <Row className='px-0 my-5 text-white'>
              <Col lg={3} md={3} sm={6} xs={12} className='p-2 text-white'>
                <h5 className='footer-menu-title'> OFFICE ADDRESS </h5>
                <p>125 Joy street Mowe Sheerwood <br></br> Email: suppport@luxe-lane.com </p>
                <h5 className='footer-menu-title'> SOCIAL LINK </h5>
                <span><i className="fab m-1 h4 fa-facebook"></i></span>
                <span><i className="fab m-1 h4 fa-instagram"></i></span>
                <span><i className="fab m-1 h4 fa-twitter"></i></span>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} className='p-2 text-white'>
                <h5 className='footer-menu-title'> DOWNLOAD APPS </h5>
                <span><img src={Google} alt="" style={{width:"200px"}} /></span><br></br>
                <span><img src={Apple} alt="" className='mt-2' style={{width:"200px"}} /></span>
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

export default FooterMobile
