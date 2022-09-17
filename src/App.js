import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { Box } from '@mui/material'
import DashBoard from './Screens/DashBoard/DashBoard'
import SignUpPage from './Screens/SignupPage/SignUpPage'
import LoginInPage from './Screens/LoginPage/LoginInPage'
import TermsAndCondition from './Screens/FooterComponents/TermsAndCondition/TermsAndCondition'
import PrivacyPolicy from './Screens/FooterComponents/PrivacyPolicy/PrivacyPolicy'
import HomePage from './Screens/HomePage/HomePage'
import AboutPage from './Screens/FooterComponents/About/AboutPage'
import CheckOutPage from './Screens/CheckOutPage/CheckOutPage'
import HelpPage from "./Screens/HelpPage/HelpPage"
import TourDetails from "./Screens/TourDetails/TourDetails"
import WishList from "./Screens/WishList/WishList"
import UserSettings from "./Components/userInformation/UserSettings"
import SignUpUserDetails from "./Screens/SignupPage/SignUpUserDetails"
import BookingPage from "./Screens/BookingPage/BookingPage"
import BookedDetailsPage from './Screens/BookedDetailsPage/BookedDetailsPage'
import AboutTurkey from './Components/AboutTurkey/AboutTurkey'


const App = () => {
  return (
    <Box>
    <Routes>
      <Route path='/'  element={<HomePage />} />
      <Route path='/dashBoard' element={<DashBoard />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginInPage />} />
      <Route path='/TermsAndCondition' element={<TermsAndCondition />} />
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
      <Route path='/bookingPage' element={<BookingPage />} />
      <Route path='/helpPage' element={<HelpPage />} />
      <Route path='/TourDeatils' element={<TourDetails />} />
      <Route path='/aboutPage' element={<AboutPage />} />
      <Route path='/wishList' element={<WishList />} />
      <Route path='/userProfile' element={<UserSettings />} />
      <Route path='/checkoutPage' element={<CheckOutPage />} />
      <Route path='/signupUserDetails' element={<SignUpUserDetails />} />
      <Route path='/bookedDetailsPage' element={<BookedDetailsPage />} />
      <Route path='/aboutTurkey' element={<AboutTurkey />} />
    </Routes>
    </Box>
  )
}

export default App