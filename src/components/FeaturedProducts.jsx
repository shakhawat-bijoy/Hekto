import React, { useState } from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import Image from './layer/Image'
import Button from './layer/Button'
import f1 from '../assets/f1.png'
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'
import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { FaRegHeart, FaSearchPlus } from 'react-icons/fa'

const FeaturedProducts = () => {
    
  let [show1, setShow1] = useState(false)
  let [show2, setShow2] = useState(false)
  let [show3, setShow3] = useState(false)
  let [show4, setShow4] = useState(false)
  return (
    <div className='lg:mt-32 mt-8'>
        <Container className="px-3 lg:px-0">
            <Title className="font-Josefin text-center" text="Featured Products"/>

            <div className='flex flex-wrap justify-between'>
                {/* ============================ */}
            <div onClick={()=> setShow1(!show1)} className='lg:w-[270px] w-[370px] h-[361px] bg-slate-300 lg:mt-[50px] mt-6 cursor-pointer group'>

            <div className='h-[236px] bg-[#F6F7FB] relative'>
            <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={f3}/>
            <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show1? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>


{/*  */}

            </div>

            <div className='h-[125px] bg-white hover:bg-[#2F1AC4] text-[#FB2E86]   hover:text-white transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                <h5 className='text-lg font-bold text-center'>Cantilever chair</h5>
                <Image src={f1}/>
                <p className='font-Josefin text-sm  font-normal'>Code - Y523201</p>
                <p className='font-Josefin text-sm font-normal'>$42.00</p>
            </div>
            </div>


{/* ================================= */}


            <div onClick={()=> setShow2(!show2)} className='lg:w-[270px] w-[370px] h-[361px] bg-slate-300 lg:mt-[50px] mt-6 cursor-pointer group'>

            <div className='h-[236px] bg-[#F6F7FB] relative'>
            <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={f2}/>
            <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show2? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>


{/*  */}

            </div>

            <div className='h-[125px] bg-white hover:bg-[#2F1AC4] text-[#FB2E86]   hover:text-white transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                <h5 className='text-lg font-bold text-center'>Cantilever chair</h5>
                <Image src={f1}/>
                <p className='font-Josefin text-sm  font-normal'>Code - Y523201</p>
                <p className='font-Josefin text-sm font-normal'>$42.00</p>
            </div>
            </div>

{/* ================================= */}

            <div onClick={()=> setShow3(!show3)} className='lg:w-[270px] w-[370px] h-[361px] bg-slate-300 lg:mt-[50px] mt-6 cursor-pointer group'>

            <div className='h-[236px] bg-[#F6F7FB] relative'>
            <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={l5}/>
            <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show3? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>


            {/*  */}

            </div>

            <div className='h-[125px] bg-white hover:bg-[#2F1AC4] text-[#FB2E86]   hover:text-white transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                <h5 className='text-lg font-bold text-center'>Cantilever chair</h5>
                <Image src={f1}/>
                <p className='font-Josefin text-sm  font-normal'>Code - Y523201</p>
                <p className='font-Josefin text-sm font-normal'>$42.00</p>
            </div>
            </div>

{/* ================================= */}

            <div onClick={()=> setShow4(!show4)} className='lg:w-[270px] w-[370px] h-[361px] bg-slate-300 lg:mt-[50px] mt-6 cursor-pointer group'>

            <div className='h-[236px] bg-[#F6F7FB] relative'>
            <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={l6}/>
            <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show4? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>


{/*  */}

            </div>

            <div className='h-[125px] bg-white hover:bg-[#2F1AC4] text-[#FB2E86]   hover:text-white transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                    <h5 className='text-lg font-bold text-center'>Cantilever chair</h5>
                    <Image src={f1}/>
                    <p className='font-Josefin text-sm  font-normal'>Code - Y523201</p>
                    <p className='font-Josefin text-sm font-normal'>$42.00</p>
                </div>
            </div>

        </div>





        </Container>
    </div>
  )
}

export default FeaturedProducts










{/* <div className="overlay w-full absolute top-3 translate-x-[-100%] left-0 group-hover:translate-x-[-16px] transition-all duration-300">

<ul >



    <Link>
    <button className='w-[30px] h-[30px] hover:bg-[#EEEFFB]  justify-center items-center rounded-full transition-all duration-500'>
    <IoCartOutline className='text-[#2F1AC4]' />
    </button>
    </Link>
    <Link>
    <button className='lg:ml-4 mt-2 w-[30px] h-[30px]   hover:bg-[#EEEFFB] justify-center items-center rounded-full hover:transition-all duration-300'>
    <FaRegHeart  className='text-[#2F1AC4] w-[17px] h-[17px]'/>
    </button>
    </Link>
    <Link>
    <button className='lg:ml-5 ml-2 w-[30px] h-[30px] hover:bg-[#EEEFFB] justify-center items-center rounded-full hover:transition-all duration-300'>
    <FaSearchPlus className='text-[#2F1AC4] ' />

    </button>
    </Link>

</ul>
</div>  */}