import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import SignUpPage from '../pages/SignUpPage';
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import MoviesPage from '../pages/MoviesPage';
import TvSeriesPage from '../pages/TvSeriesPage';
import MoviesSearchPage from '../pages/MoviesSearchPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import RowPage from '../pages/RowPage';

export class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element ={<HomePage/>} ></Route>
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/tvseries" element={<TvSeriesPage />} />
            <Route path="/searchmovies" element={<MoviesSearchPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/resetpassword" element={<ResetPasswordPage />} />
            <Route path="/row" element={<RowPage />} />


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
