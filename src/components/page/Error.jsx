import React from 'react'
import Container from '../layer/Container'
import Image from '../layer/Image'
import error from '../../assets/error.png'
import Button from '../layer/Button'
import Navbar from '../Navbar'
import Award from '../Award'
import Footer from '../Footer'
import FooterBottom from '../FooterBottom'

const Error = () => {
  return (
    <div>
          <Navbar/>
        <Container>
            <div className='relative'>
            <Image className="mx-auto" src={error}/>
            </div>
        </Container>
            <Award/>
            <Footer/>
            <FooterBottom/>
    </div>
  )
}

export default Error