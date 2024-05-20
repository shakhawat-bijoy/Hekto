import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import FooterBottom from '../FooterBottom'
import Award from '../Award'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>

        <Outlet/>
        <Award/>
        <Footer/>
        <FooterBottom/>
    </div>
  )
}

export default RootLayout