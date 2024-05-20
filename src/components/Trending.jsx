import React from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import Image from './layer/Image'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'
import t3 from '../assets/t3.jpg'
import t4 from '../assets/t4.jpg'
import t5 from '../assets/t5.png'
import t6 from '../assets/t6.png'
import t7 from '../assets/t7.png'
import t8 from '../assets/t8.png'
import t9 from '../assets/t9.png'
import { Link } from 'react-router-dom'

const Trending = () => {
  return (
    <div>
        <Container className='px-3 lg:px-0'>
            <Title className="text-center lg:mt-[132px] mt-8 lg:mb-10 mb-6" text="Trending Products"/>

                <div className='flex flex-wrap gap-y-5 justify-between mb-10'>

            {/* ============================ */}

                <div className='lg:w-[270px] w-[370px] h-[350px] shadow-md'>
                    <Image className="lg:mb-[11px] mb-2 lg:pt-[11px] pt-3 mx-auto" src={t1}/>
                    <Link>
                    <p className='text-base font-Lato text-[#151875] font-bold leading-7 text-center'>Cantilever chair</p>
                    </Link>
                    <p className=' flex gap-x-3 justify-center mt-2'>
                        <span className='text-[#151875] font-Josefin text-sm font-normal'>$26.00 </span>
                        <span className='font-Josefin text-xs font-normal line-through text-[#B8BAD7]'>$42.00</span>
                    </p>
                </div>

            {/* ============================ */}

                <div className='lg:w-[270px] w-[370px] h-[350px] shadow-md'>
                    <Image className="lg:mb-[11px] mb-2 lg:pt-[11px] pt-3 mx-auto" src={t2}/>
                    <Link>
                    <p className='text-base font-Lato text-[#151875] font-bold leading-7 text-center'>Cantilever chair</p>
                    </Link>
                    <p className=' flex gap-x-3 justify-center mt-2'>
                        <span className='text-[#151875] font-Josefin text-sm font-normal'>$26.00 </span>
                        <span className='font-Josefin text-xs font-normal line-through text-[#B8BAD7]'>$42.00</span>
                    </p>
                </div>


            {/* ============================ */}

                 <div className='lg:w-[270px] w-[370px] h-[350px] shadow-md'>
                 <Image className="lg:mb-[11px] mb-2 lg:pt-[11px] pt-3 mx-auto" src={t3}/>
                 <Link>
                    <p className='text-base font-Lato text-[#151875] font-bold leading-7 text-center'>Cantilever chair</p>
                    </Link>
                    <p className=' flex gap-x-3 justify-center mt-2'>
                        <span className='text-[#151875] font-Josefin text-sm font-normal'>$26.00 </span>
                        <span className='font-Josefin text-xs font-normal line-through text-[#B8BAD7]'>$42.00</span>
                    </p>
                </div>


            {/* ============================ */}

                <div className='lg:w-[270px] w-[370px] h-[350px] shadow-md'>
                <Image className="lg:mb-[11px] mb-2 lg:pt-[11px] pt-3 mx-auto" src={t4}/>
                <Link>
                    <p className='text-base font-Lato text-[#151875] font-bold leading-7 text-center'>Cantilever chair</p>
                    </Link>
                    <p className=' flex gap-x-3 justify-center mt-2'>
                        <span className='text-[#151875] font-Josefin text-sm font-normal'>$26.00 </span>
                        <span className='font-Josefin text-xs font-normal line-through text-[#B8BAD7]'>$42.00</span>
                    </p>
                </div>


            {/* ============================ */}

                </div>



            <div className='flex justify-between flex-wrap gap-y-4'>
                <div className='w-[420px] h-[270px] relative hover:bg-[#EEEFFB] transition-all duration-500'>
                    <h5 className='text-[#151875] font-Josefin text-[26px] font-semibold pt-8 ml-6 mb-3'>23% off in all products</h5>
                        <Link>
                            <p className='text-base font-semibold font-Lato text-[#FB4997] transition-all duration-300 border-b border-[#FB4997] ml-6 inline-block cursor-pointer'>Shop Now</p>
                        </Link>
                       <Image className="absolute top-[61px] right-[6px]" src={t5}/>
                    
                </div>
                {/* ============================ */}
                    <div className='w-[420px] h-[270px] relative bg-[#EEEFFB] hover:bg-[#ffffff] transition-all duration-500'>
                    <h5 className='text-[#151875] font-Josefin text-[26px] font-semibold pt-8 ml-6 mb-3'>23% off in all products</h5>
                        <Link>
                            <p className='text-base font-semibold font-Lato text-[#FB4997] transition-all duration-300 border-b border-[#FB4997] ml-6 inline-block cursor-pointer'>Shop Now</p>
                        </Link>
                       <Image className="absolute top-[95px] right-[6px]" src={t6}/>
                    
                </div>
                {/* ============================ */}

                <div className='lg:w-[267px] w-[420px] h-[270px] flex flex-col justify-between'>
                    <div className=' h-[74px] bg-[#F5F6F8] flex hover:bg-[#ffffff] transition-all duration-500'>
                        <Image className="mx-[21px]" src={t7}/>
                        <div className='ml-[10px] '>
                        <p className='text-base font-Josefin font-semibold text-[#151875] mt-5'>Executive Seat chair</p>
                        <p className='text-[#151875] text-xs line-through font-Josefin'>$32.00</p>
                        </div>
                    </div>

                        <div className=' h-[74px] bg-[#F5F6F8] flex hover:bg-[#ffffff] transition-all duration-500'>
                        <Image className="mx-[21px]" src={t7}/>
                        <div className='ml-[10px] '>
                        <p className='text-base font-Josefin font-semibold text-[#151875] mt-5'>Executive Seat chair</p>
                        <p className='text-[#151875] text-xs line-through font-Josefin'>$32.00</p>
                        </div>
                    </div>

                        <div className=' h-[74px] bg-[#F5F6F8] flex hover:bg-[#ffffff] transition-all duration-500'>
                        <Image className="mx-[21px]" src={t7}/>
                        <div className='ml-[10px] '>
                        <p className='text-base font-Josefin font-semibold text-[#151875] mt-5'>Executive Seat chair</p>
                        <p className='text-[#151875] text-xs line-through font-Josefin'>$32.00</p>
                        </div>
                    </div>

                    
                </div>
                
            </div>











        </Container>
    </div>
  )
}

export default Trending