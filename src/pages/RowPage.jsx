import React, { Component } from 'react'
import FooterDesktop from '../components/partials/FooterDesktop';
import FooterMobile from '../components/partials/FooterMobile';
import Rows from '../components/home/Rows';

export class RowPage extends Component {

    componentDidMount(){
        window.scroll(0, 0)
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
            
            <Rows />

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

export default RowPage
