import React from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import Listitem from './layer/Listitem'
import Image from './layer/Image'
import d from '../assets/d.png'

const Discount = () => {
  return (
    <div>
        <Container className="px-3 lg:px-0">
        <Title className="text-center lg:mt-[70px] mt-10" text="Discount Item"/>

           
            <ul className='flex items-center flex-col gap-y-2 lg:flex-row gap-x-[26px] justify-center lg:mt-5 mt-2'>
            
                <Listitem  text="Wood Chair"/>
                <Listitem  text="Plastic Chair"/>
                <Listitem  text="Sofa Colletion"/>
            </ul>
                <Image src={d}/>
        </Container>
    </div>
  )
}

export default Discount