import React from 'react'
import { Link } from 'react-router-dom'

const Listitem = ({href, text, className}) => {
  return (
    <li className='group'>
        <Link className={`font-Lato text-base font-normal leading-5 text-[#151875] hover:text-[#FB4997] transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#FB4997] relative hover:after:w-full after:transition-all after:duration-300${className}`} to={href}>
          {text}
        </Link>
    </li>
  )
}

export default Listitem