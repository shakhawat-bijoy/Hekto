import React, { useEffect, useState } from 'react'
import Container from './layer/Container'
import Listitem from './layer/Listitem'
import Image from './layer/Image'
import { FaBars, FaSearch } from 'react-icons/fa'
import logo from '../assets/Hekto.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let [show, setShow] = useState(false)

    useEffect(()=>{
        function size (){
            if(window.innerWidth < 1024){
                setShow(false)
            }else{
                setShow(true)
            }
        }
        size();
        window.addEventListener("resize", size)

    },[])

    let bar = ()=> {
        setShow(!show)
    } 


  return (
    <nav className='bg-[#ffffff] lg:py-5 font-Lato'>
    <Container className='flex lg:py-3 py-1 items-center  relative px-3 lg:px-0'>
        <div className="logo lg:mr-[88px] mr-10">
            <Image href='/' src={logo} />
        </div>


                <div className={`menu py-3 px-4 lg:py-0 absolute lg:px-0 left-0 top-full bg-[#ffffff] lg:static lg:bg-transparent flex w-full transition-all duration-700  ${show? "opacity-100 visible z-50" : " opacity-0 invisible"}`}>

                  <ul className='lg:flex items-center flex-col gap-y-2 lg:flex-row gap-x-[40px] z-50'>
                  
                    
             
                     <Listitem href="/" text="Home"/>
                     <Listitem href="/" text="Pages"/>
                     <Listitem href="/" text="Products"/>
                     <Listitem href="/" text="Blog "/>
                     <Listitem href="/" text="Shop"/>
                    <Listitem href="/" text="Contact"/>
                    </ul>
                </div>




        <div className='flex justify-between items-center'>
          <input type="text"
           className='lg:w-[266px] w-full lg:h-10 bg-white outline-none border border-[#E7E6EF]' />
           <div className='bg-[#FB2E86] lg:w-[50px] lg:h-10 flex justify-center items-center'>
             <FaSearch className='w-6 h-6  text-white' />

           </div>
         
        </div>

        <FaBars onClick={bar} className='lg:hidden cursor-pointer ml-10 text-3xl' />
    </Container>
</nav>
  )
}

export default Navbar