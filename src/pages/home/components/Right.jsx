import React from 'react'

function Right() {
  return (
    <div className="w-1/2 h-full bg-[#A5A5A5] px-10 py-5">
      <p>Checkout</p>
      <form className='space-y-5'>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <label htmlFor="">First Name</label>
            <input type="text" className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="">Last Name</label>
            <input type="text" className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <label htmlFor="">Phone</label>
            <input type="text" className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="">Emirate</label>
            <select type="text" className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' >
              <option value="option1">option1</option>
              <option value="option1">option1</option>
              <option value="option1">option1</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="">Address</label>
          <textarea type="text" className='h-36 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
        </div>

        

          <div className="flex flex-col gap-5">
            <label htmlFor="">email</label>
            <input type="text" className='h-12 w-1/2 rounded-2xl border outline-none border-[#BABCBB] pl-3' />
          </div>
        

        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <label htmlFor="">Password</label>
            <input type="text" className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="">Confirm password</label>
            <input type="text" className='h-12 w-full rounded-2xl border outline-none border-[#BABCBB] pl-3' />
          </div>
        </div>

      <button className='h-12 px-3 bg-black text-white rounded-2xl text-xl hover:rounded-xl duration-200'>Order</button>

      </form>
    </div>
  )
}

export default Right