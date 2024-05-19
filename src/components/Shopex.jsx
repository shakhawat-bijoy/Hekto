import React from 'react'
import Container from './layer/Container'
import Title from './layer/Title'
import Image from './layer/Image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'

const Shopex = () => {
  return (
    <div className=' mt-[140px] '>
        <Container>
            <Title className="text-center" text="What Shopex Offer!"/>

          <div className='mt-14 flex justify-between cursor-pointer'>

          <div className='w-[270px] h-[320px] flex flex-col  items-center hover:bg-[#EEEFFB] hover:transition-all hover:duration-300'>
                <div className="icon mt-14 mb-7">
                  <Image src={s1}/>
                </div>
                <h5 className='font-Josefin text-[#151875] text-[22px] font-semibold'>24/7 Support</h5>
                <p className='text-[hsl(251, 78%, 20%, 0.3)] font-Lato text-base font-bold leading-7 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

          <div className='w-[270px] h-[320px]  flex flex-col  items-center hover:bg-[#EEEFFB]'>
                <div className="icon mt-14 mb-7">
                  <Image src={s2}/>
                </div>
                <h5 className='font-Josefin text-[#151875] text-[22px] font-semibold'>24/7 Support</h5>
                <p className='text-[hsl(251, 78%, 20%, 0.3)] font-Lato text-base font-bold leading-7 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

          <div className='w-[270px] h-[320px]  flex flex-col  items-center hover:bg-[#EEEFFB]'>
                <div className="icon mt-14 mb-7">
                  <Image src={s3}/>
                </div>
                <h5 className='font-Josefin text-[#151875] text-[22px] font-semibold'>24/7 Support</h5>
                <p className='text-[hsl(251, 78%, 20%, 0.3)] font-Lato text-base font-bold leading-7 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

          <div className='w-[270px] h-[320px]  flex flex-col  items-center hover:bg-[#EEEFFB]'>
                <div className="icon mt-14 mb-7">
                  <Image src={s4}/>
                </div>
                <h5 className='font-Josefin text-[#151875] text-[22px] font-semibold'>24/7 Support</h5>
                <p className='text-[hsl(251, 78%, 20%, 0.3)] font-Lato text-base font-bold leading-7 mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
























        </Container>
    </div>
  )
}

export default Shopex