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
        <div className='flex gap-x-5 items-center'>
          <Link className='text-[#F1F1F1] text-base font-semibold font-Josefin flex items-center gap-x-[10px]' to='mailto:shakhawatbijoy1@gmail.com'>
          <TbMail className='text-white font-extrabold h-5 w-5' />
            <span className="hidden lg:inline mr-12">xyz1@gmail.com</span>
          </Link>
          <Link className='text-[#F1F1F1] text-base font-semibold font-Josefin flex items-center gap-x-[10px]' to='tel:+8801704446708'>
          <LuPhoneCall className='text-white font-extrabold'/>
            <span className="hidden lg:inline">+8801700000008</span>
          </Link>
        </div>
        

        <div className='flex gap-x-4 items-center'>
        <select
            className="bg-transparent text-[#F1F1F1] lg:text-base text-xs font-semibold font-Josefin outline-none cursor-pointer"    >
            
                <option className='bg-black'>English
                </option>                
                <option className='bg-black'>English
                </option>                
                <option className='bg-black'>English
                </option>
        </select>

        <select
            className="bg-transparent text-[#F1F1F1] lg:text-base text-xs font-semibold font-Josefin outline-none cursor-pointer"    >
            
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
