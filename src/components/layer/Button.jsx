import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className,to}) => {
  return (
    <div>
      <Link to={to}>
      <button className={`text-white lg:font-medium text-xs border-transparent  hover:bg-white transition-all duration-300 hover:text-[#262626] ${className}`}>{text}</button>
      
      </Link>
    </div>
  )
}

export default Button