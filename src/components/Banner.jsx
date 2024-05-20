import React from 'react'
import Image from './layer/Image';
import b1 from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div>
        <div className=' bg-slate-400 object-contain'>
        <Image className="" src={b1} href="#" />
      </div>
    </div>
  )
}

export default Banner