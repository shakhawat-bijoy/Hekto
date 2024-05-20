import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import { FaPenNib, FaRegCalendarAlt } from 'react-icons/fa'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import { Link } from 'react-router-dom'
import Title from './layer/Title'

const Blog = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">

        <Title className="text-center lg:mt-[70px] mt-10 lg:mb-20 mb-8" text="Leatest Blog"/>


            <div className='flex flex-wrap justify-between gap-y-4'>
            <div className='w-[370px] h-[493px]'>
                <Image src={b1}/>
                <div className='flex gap-x-7 ml-[14px] mt-5'>
                    <p className='flex items-center gap-x-1 text-[#151875] text-sm font-Josefin'>
                        <FaPenNib className='text-[#FB2E86]'/>
                        SaberAli
                    </p>
                    <p className='flex items-center gap-x-1  text-[#151875] text-sm font-Josefin'>
                        <FaRegCalendarAlt className='text-[#ffa555]'/>
                        21 August,2020
                    </p>
                </div>
                <h5 className='text-[#151875] text-lg font-bold mt-8 ml-5 mb-4 font-Josefin hover:text-[#FB2E86] transition-all duration-300'>Top esssential Trends in 2021</h5>
                <p className='text-[#72718F] font-Lato text-base leading-[30px] ml-5'>More off this less hello samlande lied much
                over tightly circa horse taped mightly</p>
                <Link>
                    <p className='text-base font-Lato text-[#151875] leading-[30px] transition-all duration-300 border-b border-[#151875] hover:text-[#FB2E86] hover:border-[#FB2E86] ml-5 inline-block cursor-pointer mt-[14px]'>Read More</p>
                </Link>
            </div>
            {/* ===================================== */}

            <div className='w-[370px] h-[493px]'>
                <Image className="rounded-md" src={b2}/>
                <div className='flex gap-x-7 ml-[14px] mt-5'>
                    <p className='flex items-center gap-x-1 text-[#151875] text-sm font-Josefin'>
                        <FaPenNib className='text-[#FB2E86]'/>
                        SaberAli
                    </p>
                    <p className='flex items-center gap-x-1  text-[#151875] text-sm font-Josefin'>
                        <FaRegCalendarAlt className='text-[#ffa555]'/>
                        21 August,2020
                    </p>
                </div>
                <h5 className='text-[#151875] text-lg font-bold mt-8 ml-5 mb-4 font-Josefin hover:text-[#FB2E86] transition-all duration-300'>Top esssential Trends in 2021</h5>
                <p className='text-[#72718F] font-Lato text-base leading-[30px] ml-5'>More off this less hello samlande lied much
                over tightly circa horse taped mightly</p>
                <Link>
                    <p className='text-base font-Lato text-[#151875] leading-[30px] transition-all duration-300 border-b border-[#151875] hover:text-[#FB2E86] hover:border-[#FB2E86] ml-5 inline-block cursor-pointer mt-[14px]'>Read More</p>
                </Link>
            </div>
            {/* ======================================= */}

            <div className='w-[370px] h-[493px]'>
                <Image src={b3}/>
                <div className='flex gap-x-7 ml-[14px] mt-5'>
                    <p className='flex items-center gap-x-1 text-[#151875] text-sm font-Josefin'>
                        <FaPenNib className='text-[#FB2E86]'/>
                        SaberAli
                    </p>
                    <p className='flex items-center gap-x-1  text-[#151875] text-sm font-Josefin'>
                        <FaRegCalendarAlt className='text-[#ffa555]'/>
                        21 August,2020
                    </p>
                </div>
                <h5 className='text-[#151875] text-lg font-bold mt-8 ml-5 mb-4 font-Josefin hover:text-[#FB2E86] transition-all duration-300'>Top esssential Trends in 2021</h5>
                <p className='text-[#72718F] font-Lato text-base leading-[30px] ml-5'>More off this less hello samlande lied much
                over tightly circa horse taped mightly</p>
                <Link>
                    <p className='text-base font-Lato text-[#151875] leading-[30px] transition-all duration-300 border-b border-[#151875] hover:text-[#FB2E86] hover:border-[#FB2E86] ml-5 inline-block cursor-pointer mt-[14px]'>Read More</p>
                </Link>
            </div>


            </div>

        </Container>
    </div>
  )
}

export default Blog