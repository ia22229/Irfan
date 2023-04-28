import React from 'react'
import Left from './Left'
import Right from './Right'

function Section1() {
  return (
    <section className=' p-5'>
            <div className="h-screen w-full border flex">
                <Left/>
                <Right/>
                
            </div>
    </section>
  )
}

export default Section1