import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import SignUpPage from '../pages/SignUpPage';
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';

// double click to select a line, then with your alt key, you can select multiple lines
export class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element ={<HomePage/>} ></Route>
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRoute
