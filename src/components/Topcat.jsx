import React, { useState } from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import Image from './layer/Image'
import Button from './layer/Button'
import f2 from '../assets/f2.png'
import f3 from '../assets/f3.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'

const Topcat = () => {
  
    let [show1, setShow1] = useState(false)
    let [show2, setShow2] = useState(false)
    let [show3, setShow3] = useState(false)
    let [show4, setShow4] = useState(false)
    return (
      <div className='lg:mt-32 mt-8'>
          <Container className="px-3 lg:px-0">
              <Title className="font-Josefin text-center" text="Top Categories"/>
  
              <div className='flex flex-wrap justify-between gap-y-4'>
                  {/* ============================ */}
              <div onClick={()=> setShow1(!show1)} className='lg:w-[270px] w-[370px] h-[345px] lg:mt-[50px] mt-6 cursor-pointer group'>
  
              <div className='h-[269px] bg-[#F6F7FB] hover:bg-[#ffffff] transition-all duration-500 rounded-full drop-shadow-md relative'>
              <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={f3}/>
              <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show1? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>
  
  
  {/*  */}
  
              </div>
  
              <div className='h-[125px] bg-white text-[#151875]  transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                  <h5 className='text-xl text-center font-Josefin '>Mini LCW Chair</h5>
                  <p className='font-Josefin text-sm font-normal'>$56.00</p>
              </div>
              </div>
  
  
  {/* ================================= */}
  
  
            <div onClick={()=> setShow2(!show2)} className='lg:w-[270px] w-[370px] h-[345px] lg:mt-[50px] mt-6 cursor-pointer group'>
  
            <div className='h-[269px] bg-[#F6F7FB] hover:bg-[#ffffff] transition-all duration-500 rounded-full drop-shadow-md relative'>
            <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={l5}/>
            <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show2? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>


{/*  */}

            </div>

            <div className='h-[125px] bg-white text-[#151875]  transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                <h5 className='text-xl text-center font-Josefin '>Mini LCW Chair</h5>
                <p className='font-Josefin text-sm font-normal'>$56.00</p>
            </div>
            </div>
  
  {/* ================================= */}


            <div onClick={()=> setShow3(!show3)} className='lg:w-[270px] w-[370px] h-[345px] lg:mt-[50px] mt-6 cursor-pointer group'>
            
            <div className='h-[269px] bg-[#F6F7FB] hover:bg-[#ffffff] transition-all duration-500 rounded-full drop-shadow-md relative'>
            <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={l6}/>
            <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show3? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>


{/*  */}

            </div>

            <div className='h-[125px] bg-white text-[#151875]  transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                <h5 className='text-xl text-center font-Josefin '>Mini LCW Chair</h5>
                <p className='font-Josefin text-sm font-normal'>$56.00</p>
            </div>
            </div>
  
  {/* ================================= */}
  
              <div onClick={()=> setShow4(!show4)} className='lg:w-[270px] w-[370px] h-[345px] lg:mt-[50px] mt-6 cursor-pointer group'>
  
              <div className='h-[269px] bg-[#F6F7FB] hover:bg-[#ffffff] transition-all duration-500 rounded-full drop-shadow-md relative'>
              <Image className='absolute bottom-3 left-[50%] translate-x-[-50%]' src={f2}/>
              <Button className={`font-Josefin py-2 px-3.5 bg-[#08D15F] absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded-sm transition-all duration-500 ${show4? "static": "absolute translate-y-[100%] invisible"}`} text="View Details"/>
  
  
  {/*  */}
  
              </div>
  
              <div className='h-[125px] bg-white text-[#151875]  transition-all duration-300 flex flex-col justify-center items-center gap-y-3 group'>
                  <h5 className='text-xl text-center font-Josefin '>Mini LCW Chair</h5>
                  <p className='font-Josefin text-sm font-normal'>$56.00</p>
              </div>
              </div>
  
          </div>
  
  
  
  
  
          </Container>
      </div>
    )
  }


export default Topcat