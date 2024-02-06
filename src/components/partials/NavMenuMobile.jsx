import React, { Component } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import Logo from '../../assets/images/cart64.png'
import { Link } from 'react-router-dom'
// import MegaMenuMobile from '../home/MegaMenuMobile'
import Menu from '../../assets/images/menu.png'

export class NavMenuMobile extends Component {
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
  ContentOverlayClickHandler = ()=>{
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
  render(){

    return (
      <>
        <div className='TopSectionDown'>
            <Container fluid={"true"} className='fixed-top shadow-sm bg-white p-2 m-0'>
              <Row>
                <Col lg={4} md={4} sm={12} xs={12}>
                  {/* <Button onClick={this.MenuBarClickHandler} className='btn'><i className="fa fa-bars"></i></Button> */}
                  <img onClick={this.MenuBarClickHandler} src={Menu} alt="" className='bar-img' />
                  <Link to="/"><img className='nav-logo' src={Logo} alt="" /></Link> &nbsp; &nbsp;

                  <Link to="/cart" className='cart-btn'><i className="fa fa-shopping-cart"></i> 3 items </Link>

                </Col>

              </Row>
            </Container>

            {/* <div className={this.state.SideNavState}>
              <MegaMenuMobile />
            </div>

            <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

            </div> */}
        </div>
      </>
    )
  }
}

export default NavMenuMobile
