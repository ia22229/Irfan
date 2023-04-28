import React from 'react'

function Header() {
  return (
    <header className='w-full h-[96px] px-[72px] bg-black flex justify-between items-center text-white text-xl font-medium'>
        <div className="logo h-12 w-[100px] bg-white"></div>
        <p>Home</p>
        <p>Sub</p>
        <p>HIW</p>
        <p>FAQ</p>
        <p>Referal</p>
        <button className='px-12 py-3 bg-yellow-200 rounded-xl text-black font-semibold text-xl'>Login</button>
    </header>
  )
}

export default Header