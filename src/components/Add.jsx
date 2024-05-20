import React from 'react'
import Image from './layer/Image'
import Container from './layer/Container'
import add from '../assets/add.png'

const Add = () => {
  return (
    <div className='lg:h-[580px] h-auto w-full bg-[#F1F0FF] lg:mt-[130px] mt-10 px-3 lg:px-0'>
        <Container className="">
            <Image className="flex justify-center items-center" src={add}/>
        </Container>
    </div>
  )
}

export default Add