import React from 'react'
import Container from './layer/Container'
import { Link } from 'react-router-dom'
import Image from './layer/Image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch } from 'react-icons/fa'
import footer from '../assets/footer.png'


const Footer = () => {
  return (
    <div className='md:pt-14  pt-8 lg:pb-[52px] pb-5  bg-[#EEEFFB] lg:mt-[140px] md:mt-[106px] mt-16'>
      <Container className="flex justify-between flex-wrap px-8 lg:px-0">

        
      <div className="flex flex-col lg:gap-y-8 gap-y-4">
          <Image className=' md:mb-0 mb-3 mt-7' src={footer}/>
          <div className='flex justify-between items-center relative'>
          <input type="text" placeholder='Enter Email Address'
                className='lg:w-[377px] w-full lg:h-10 h-8 lg:pl-5 text-xs bg-white outline-none lg:text-base font-Lato' />
          <button className='absolute lg:right-5 right-0.5 top-0.5 lg:h-9 h-7 bg-blue-500 hover:bg-[#FB2E86] transition-all duration-300 text-white lg:px-4 px-2 rounded-md'>
          Sign Up
          </button>
        </div>
        <div>

        <p className='font-Lato lg:text-base text-[#8A8FB9]'>Contact Info</p>
        <p className='font-Lato lg:text-base text-[#8A8FB9] mb-8'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        </div>

        <div className="left">

          <div className="menu md:flex gap-x-14">
          <ul className='mb-8 flex flex-col lg:gap-y-2 gap-y-1'>
              <h4 className='font-Josefin font-semibold text-[22px] text-[#000000] md:mb-4 mb-2'>Catagories</h4>

              <li>
                <Link className='font-Lato text-base text-[#8A8FB9]'>Laptops & Computers</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/shop">Cameras & Photography</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/about">Smart Phones & Tablets</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/contacts">Video Games & Consoles</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/productInside">Waterproof Headphones</Link>
              </li>


            </ul>

            {/* ======================== */}

            <ul className='mb-8 flex flex-col lg:gap-y-2 gap-y-1'>
              <h4 className='font-Josefin font-semibold text-[22px] text-[#000000] md:mb-4 mb-2'>Customer Care</h4>

              <li>
                <Link className='font-Lato text-base text-[#8A8FB9]'>My Account</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/shop">Discount</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/about">Returns</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/contacts">Orders History</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/productInside">Order Tracking</Link>
              </li>


            </ul>

            {/* ============================== */}

            <ul className='mb-8 flex flex-col lg:gap-y-2 gap-y-1'>
              <h4 className='font-Josefin font-semibold text-[22px] text-[#000000] md:mb-4 mb-2'>Pages</h4>

              <li>
                <Link className='font-Lato text-base text-[#8A8FB9]'>Blog</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/shop">Browse the Shop</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/about">Category</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/contacts">Pre-Built Pages</Link>
              </li>
               <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/productInside">Visual Composer Elements</Link>
              </li>
              <li>
                <Link className='font-Lato text-base text-[#8A8FB9]' to="/productInside">WooCommerce Pages</Link>
              </li>


            </ul>

            {/* ============================== */}





            {/* <ul className=' mt-7 md:mt-0'>

              <li>
                <Link className='font-DM text-base leading-7 font-bold text-[#262626] ' to='tel:(052) 611-5711'>(052) 611-5711</Link>
              </li>
               <li>
                <Link className='font-DM text-base leading-7 font-bold text-[#262626] ' to='mailto:company@domain.com'>company@domain.com</Link>
              </li>
               <li>
                <Link className='font-DM text-sm leading-6 text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</Link>
              </li>



            </ul> */}

          </div>
{/* 
          <div className="icon flex gap-x-[26px] md:mt-16 mt-8">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />

          </div> */}

        </div>




      </Container>
    </div>
  )
}

export default Footer