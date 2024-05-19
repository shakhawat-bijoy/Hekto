import React from 'react'

const Title = ({text,className}) => {
  return (
    <div>
        <h2 className={`text-[#1A0B5B] font-Josefin lg:text-[42px] text-2xl md:text-4xl font-bold  ${className}`}>{text}</h2>
    </div>
  )
}

export default Title
