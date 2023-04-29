import React from 'react'

import logo from '../assets/images/shared/logo.png'
import { Quiz, SubscriptionsOutlined, WhatsApp } from '@mui/icons-material'

function Footer() {
  return (
    <footer className='flex  gap-10 p-10 bg-black text-white'>
      <div className="">
        <img src={logo} width={200} alt="" />
      </div>
      <div className=" space-y-5">
        <h4>Quick Links</h4>
        <ul className='space-y-5'>
          <li><SubscriptionsOutlined/> Sub</li>
          <li>How it work</li>
        </ul>
      </div>
      
      <div className=" space-y-10">
        <h4></h4>
        <ul className='space-y-5'>
          <li><Quiz/> Sub</li>
          <li>How it work</li>
        </ul>
      </div>

      <div className=" space-y-5">
        <h4>Quick Links</h4>
        <ul className='space-y-5'>
          <li>Sub</li>
          <li>How it work</li>
        </ul>
      </div>


<div className="fixed bottom-5 right-5 h-16 w-16 bg-green-500 rounded-full flex justify-center items-center">
  <WhatsApp fontSize='large'/>
</div>

    </footer>
  )
}

export default Footer