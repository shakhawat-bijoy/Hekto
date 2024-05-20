import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import FooterBottom from '../FooterBottom'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>

        <Outlet/>

        {/* <Footer/> */}
        <FooterBottom/>
    </div>
  )
}

export default RootLayout