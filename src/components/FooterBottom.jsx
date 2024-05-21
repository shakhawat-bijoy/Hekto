import React from 'react'
import Container from './layer/Container'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io';

const FooterBottom = () => {
  return (
    <div className='bg-[#E7E4F8]'>
        <Container className="lg:px-0 px-3" >
        <div className='flex justify-between items-center'>
            <p className='lg:ml-[69px] py-4 font-Lato lg:text-base text-xs lg:font-semibold text-[#9DA0AE]'>©Webecy - All Rights Reserved</p>

            <div className='flex lg:mr-[140px] items-center gap-x-3'>

                <FaFacebookF className='lg:w-5 lg:h-5 rounded-full bg-[#151875] text-white text-xs'/>
                <AiFillInstagram className='lg:w-5 lg:h-5 rounded-full bg-[#151875] text-white text-xs'/>
                <IoLogoTwitter className='lg:w-5 lg:h-5 rounded-full bg-[#151875] text-white text-xs'/>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterBottom