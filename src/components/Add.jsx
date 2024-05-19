import React from 'react'
import Image from './layer/Image'
import Container from './layer/Container'
import add from '../assets/add.png'

const Add = () => {
  return (
    <div className='h-[580px] w-full bg-[#F1F0FF] mt-[130px]'>
        <Container>
            <Image className="flex justify-center items-center" src={add}/>
        </Container>
    </div>
  )
}

export default Add