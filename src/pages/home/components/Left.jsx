import React, { useEffect, useState } from 'react'

function Left() {
    const [selectedPlan, setSelectedPlan] = useState(145)
    useEffect(() => {
      
    console.log(selectedPlan)
    }, [selectedPlan])

  return (
    <div className="w-1/2 h-full bg-black text-white px-10 py-5" >
        <h1 className='text-4xl font-semibold'>Package</h1>
        <div className="flex flex-col mt-10 gap-5">
            <Plans title={'Monthly'} amount={145} plan={'Billed Monthly'} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
            <Plans title={'6 Month'} amount={700} plan={'Billed 6 Month'} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
            <Plans title={'Yearly'} amount={1100} plan={'Billed Yearly'} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
        </div>
    </div>
  )
}

export default Left

const Plans = ({title,plan,amount,selectedPlan,setSelectedPlan}) =>{
    return(
        <button className={`${amount===selectedPlan && 'border-yellow-500'} h-24 w-72 border rounded-3xl flex items-center justify-between px-3`} onClick={()=>{setSelectedPlan(amount)}}>
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <div className="space-y-3">
                <p>{title}</p>
                <p>{plan}</p>
            </div>
            <div className="font-semibold">{amount} AED/mo</div>
        </button>
    )
}