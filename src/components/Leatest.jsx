import React from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import Listitem from './layer/Listitem'
import Productitem from './layer/Productitem'
import l1 from '../assets/l1.png'
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import l5 from '../assets/l5.png'
import l6 from '../assets/l6.png'

const Leatest = () => {
  return (
    <div className='pb-11'>
        <Container className="px-3 lg:px-0">
            <Title className="text-center lg:mt-[70px] mt-10" text="Leatest Products"/>

           
              <ul className='flex items-center flex-col gap-y-2 lg:flex-row gap-x-[60px] justify-center mt-5 lg:mb-[58px] mb-6'>
                
              <Listitem className="text-[#151875] text-lg font-Lato font-normal" text="New Arrival"/>
              <Listitem className="text-[#151875] text-lg font-Lato font-normal" text="Best Seller"/>
              <Listitem className="text-[#151875] text-lg font-Lato font-normal" text="Featured"/>
              <Listitem className="text-[#151875] text-lg font-Lato font-normal" text="Special Offer"/>
              
              </ul>

            <div className='flex flex-wrap justify-between gap-y-[120px]'>
              <Productitem src={l1}/>
              <Productitem src={l2}/>
              <Productitem src={l3}/>
             
              <Productitem src={l4}/>
              <Productitem src={l5}/>
              <Productitem src={l6}/>
            </div>

            

        </Container>
    </div>
  )
}

export default Leatest



