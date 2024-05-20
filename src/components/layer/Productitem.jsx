import React from 'react'
import Listitem from './Listitem'
import { FaHeart, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';





const Productitem = ({src, alt, className, offer}) => {
  return (
    <div className={` productitem w-[360px] h-[306px] group ${className}`}>

        <div className="image w-full h-full bg-[#F7F7F7] hover:bg-[#FFFFFF] relative overflow-hidden border-none">
            <img className={`w-[223px] h-[229px] absolute bottom-2 transform translate-x-[30%] ${className} `} src={src} alt={alt} />

            <button className={`absolute top-5 left-5 bg-[#262626] text-[#FFFFFF] ${offer ?"px-8":"px-0"} py-2  `}>{offer}</button>

            <div className="overlay w-full absolute bottom-0 translate-y-[100%] left-0 group-hover:translate-y-[-38px] transition-all duration-300">

                <ul className=' pl-8 '>

                

                    <Link>
                         <button className='w-[30px] h-[30px] hover:bg-[#EEEFFB] flex justify-center items-center rounded-full transition-all duration-500'>
                         <IoCartOutline className='text-[#2F1AC4]' />
                        </button>
                     </Link>
                    <Link>
                         <button className='lg:mt-5 mt-2 w-[30px] h-[30px] hover:bg-[#EEEFFB] flex justify-center items-center rounded-full hover:transition-all duration-300'>
                         <FaRegHeart  className='text-[#2F1AC4] w-[17px] h-[17px]'/>
                        </button>
                     </Link>
                    <Link>
                         <button className='lg:mt-5 mt-2 w-[30px] h-[30px] hover:bg-[#EEEFFB] flex justify-center items-center rounded-full hover:transition-all duration-300'>
                         <FaSearchPlus className='text-[#2F1AC4] ' />

                        </button>
                     </Link>
                     
                </ul>
            </div>

        </div>

        <div className="flex justify-between items-center pt-4 pb-1 ">
            <h2 className='text-base  text-[#151875] font-Josefin after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#EEEFFB] relative hover:after:w-full after:transition-all after:duration-300 cursor-pointer'>
                Comfort Handy Craft
            </h2>
            <div className='flex items-center gap-x-[10px] font-Josefin'>
                <p className='text-[#151875] text-sm font-normal '>$42.00</p>

                <p className='text-[#FB2448] line-through text-xs font-normal leading-7 '>$65.00</p>
            </div>
           
        </div>

    </div>
  )
}

export default Productitem