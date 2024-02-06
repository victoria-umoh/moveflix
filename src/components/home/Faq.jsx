import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Col, Row } from 'react-bootstrap';

class Faq extends Component {
  constructor() {
    super();
    // this.handleAccordionClick = this.handleAccordionClick.bind(this);
  }

  // componentDidMount() {
  //   this.setupAccordion();
  // }

  // setupAccordion() {
  //   var acc = document.getElementsByClassName('accordion');
  //   var accNum = acc.length;

  //   for (var i = 0; i < accNum; i++) {
  //     acc[i].addEventListener('click', this.handleAccordionClick);
  //   }
  // }

  // handleAccordionClick(event) {
  //   // Use event.currentTarget instead of this
  //   event.currentTarget.classList.toggle('active');
  //   var panel = event.currentTarget.nextElementSibling;
  //       if (panel.style.maxHeight) {
  //           panel.style.maxHeight = null;
  //       } else {
  //           panel.style.maxHeight = panel.scrollHeight + 'px';
  //       }
  // }

 
 
 
 render() {
    return (
      <>

        <Container className='p-2 m-3' fluid={false}>
          <Row className='p-auto'>
            <Col lg={12} md={12} sm={12} xs={12} >
              <div className="p-auto">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body className='bg-dark text-white'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body className='bg-dark text-white'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Faq;
