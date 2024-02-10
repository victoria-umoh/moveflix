import React, { Component } from 'react';

// import Faq from '../components/home/Faq';
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import AppURL from '../api/AppURL';
import axios from 'axios';
import HomeTop from '../components/home/HomeTop';

export class HomePage extends Component {

  componentDidMount(){
    window.scroll(0,0);

    this.GetVisitorDetails(); //call GetVisitorDetails() so it loads when page is refreshed 
  }

  // Defined a method named GetVisitorDetails within a class or a functional component
  GetVisitorDetails =()=>{
     axios.get(AppURL.VisitorDetails).then().catch()    // Used axios to make a GET request to the VisitorDetails URL from the AppURL class
  }
  
  render() {
    return (
      <>

        <HomeTop />

        {/* <Faq /> */}

        
        <div className="Desktop">
          <FooterDesktop />
        </div>

        <div className="Mobile">
          <FooterMobile />
        </div>
      </>
    )
  }
}

export default HomePage
