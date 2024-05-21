import React from 'react';
import Container from './layer/Container';
import { TbMail } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { LuPhoneCall, LuUser } from 'react-icons/lu';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const Navtop = () => {
  return (
    <div className='bg-[#7E33E0] lg:py-4 py-1'>

      <Container className="px-2 lg:px-0">
        <div className='flex items-center justify-between'>
        <div className='flex gap-x-[10px] items-center'>
          <TbMail className='text-white font-extrabold' />
          <Link className='text-[#F1F1F1] text-base font-semibold font-Josefin' to='mailto:company@domain.com'>
            <span className="hidden lg:inline mr-12">shakhawatbijoy1@gmail.com</span>
          </Link>
          <LuPhoneCall className='text-white font-extrabold'/>
          <Link className='text-[#F1F1F1] text-base font-semibold font-Josefin' to='tel:+8801704446708'>
            <span className="hidden lg:inline">+8801704446708</span>
          </Link>
        </div>
        

        <div className='flex gap-x-4 items-center'>
        <select
            className="bg-transparent text-[#F1F1F1] lg:text-base text-xs font-semibold font-Josefin outline-none"    >
            
                <option className='bg-black'>English
                </option>                
                <option className='bg-black'>English
                </option>                
                <option className='bg-black'>English
                </option>
        </select>

        <select
            className="bg-transparent text-[#F1F1F1] lg:text-base text-xs font-semibold font-Josefin outline-none"    >
            
                <option className='bg-black'>USD
                </option>                
                <option className='bg-black'>EURO
                </option>                
                <option className='bg-black'>GBP
                </option>
        </select>

            <Link>
                <button className='text-[#F1F1F1] lg:text-base text-xs font-semibold font-Josefin flex items-center gap-x-1'>
                    <span className="hidden lg:inline">Login</span>
                    <LuUser className='h-4 w-4 ' />
                </button>
            </Link>
            <Link>
                <button className='text-[#F1F1F1] lg:text-base text-xs font-semibold font-Josefin flex items-center gap-x-1'>
                    <span className="hidden lg:inline">Wishlist</span>
                    <FaRegHeart className='h-4 w-4 ' />
                </button>
            </Link>
            <Link>
                <IoCartOutline className='text-[#F1F1F1] font-extrabold lg:ml-[10px] h-[18px] w-5 lg:h-6 lg:w-6' />
            </Link>
        </div>
                    
        </div>
      </Container>
    </div>
  );
};

export default Navtop;
