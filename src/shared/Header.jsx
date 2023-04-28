import React from 'react'

import logo from '../assets/images/shared/logo.png'

function Header() {
  return (
    <div className="hidden md:flex justify-between items-center font-medium text-lg h-24 w-full bg-black  text-white z-50 px-[5%]">  
    <img src={logo} width={100} alt="" />
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Home</span>
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Subscibe</span>
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>How it works</span>
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>FAQ</span>
        <span className='text-base font-semibold hover:text-[1.2rem] duration-200'>Referral</span>
        <button className='h-[43px] w-[169px] bg-[#FEDE00] font-medium text-xl rounded-2xl text-black' >Login</button>
    </div>
  )
}

export default Header