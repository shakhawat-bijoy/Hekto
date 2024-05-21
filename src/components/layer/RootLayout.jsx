import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import FooterBottom from '../FooterBottom'
import Award from '../Award'
import Navtop from '../Navtop'

const RootLayout = () => {
  return (
    <div>


        <Navtop/>
        <Navbar/>
        <Outlet/>
        <Award/>
        <Footer/>
        <FooterBottom/>
    </div>
  )
}

export default RootLayout