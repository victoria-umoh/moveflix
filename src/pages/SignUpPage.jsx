import React, { Component } from 'react'
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import SignUp from '../components/home/SignUp';

export class SignUpPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
  render() {
    return (
        <>
        <div className="Desktop">
            {/* <NavMenuDesktop /> */}
        </div>

        <div className="Mobile">
            {/* <NavMenuMobile /> */}
        </div>
        
        <SignUp />

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

export default SignUpPage
