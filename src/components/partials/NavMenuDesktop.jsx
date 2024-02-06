import React, { Component } from 'react'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap'
import Logo from '../../assets/images/cart64.png'
import Menu from '../../assets/images/menu.png'
import { Link } from 'react-router-dom'
// import MegaMenuAll from '../home/MegaMenuAll';

export class NavMenuDesktop extends Component{
  constructor(){
    super();
    // Initializing component state with two properties for managing side navigation and content overlay
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose"      
    }
  }

  // Handler for clicking the menu bar button
  MenuBarClickHandler = ()=>{
    this.SideNavtoggle();
  }

  // Handler for clicking the content overlay
  ContentOverlayClickHandler =()=>{
    this.SideNavtoggle();
  }

  // Function to toggle the side navigation and content overlay state
  SideNavtoggle = ()=>{
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
      if(SideNavState === "sideNavOpen"){
        this.setState({SideNavState:"sideNavClose", ContentOverState:"ContentOverlayClose"})
      }else{
        this.setState({SideNavState:"sideNavOpen", ContentOverState:"ContentOverlayOpen"})
      }
  }
  render() {
    return (
      <>
        <div className='TopSectionDown'>
          <Navbar fixed={"top"} bg="light" className='navbar'>
            <Container fluid={"true"} className='fixed-top shadow-sm bg-white p-2 m-0'>
              <Row>
                {/* col 1 */}
                <Col lg={4} md={4} sm={12} xs={12}>
                  <img onClick={this.MenuBarClickHandler} src={Menu} alt="" className='bar-img' />

                  <Link to="/"><img className='nav-logo' src={Logo} alt=""  /></Link>
                  
                </Col>

                {/* col 2 */}
                <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                  <div className="input-group w-100"> 
                    <input type="text" className='form-control' />
                    <Button type="button" className='btn site-btn'><i className="fa fa-search"></i></Button>
                  </div>
                </Col>
                
                {/* col 3 */}
                <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                  <Link to="/favourite" className='btn'>
                    <i className="fa h4 fa-heart">
                      <sup><span className='badge text-white bg-danger'> 3 </span></sup>
                    </i>
                  </Link>

                  <Link to="/notification" className='btn'>
                    <i className="fa h4 fa-bell">
                      <sup><span className='badge text-white bg-danger'> 5 </span></sup>
                    </i>
                  </Link>
                    <span className='btn'><i className="fa h4 fa-mobile-alt"></i></span>
                    <Link to="/login" className='h4 btn'>LOGIN</Link>
                    <Link to="/cart" className='cart-btn'><i className="fa fa-shopping-cart"></i> 3 items </Link>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
{/* 
        <div className={this.state.SideNavState}>
          <MegaMenuAll />
        </div>

        <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

        </div> */}
      </>
    )
  }
}

export default NavMenuDesktop
