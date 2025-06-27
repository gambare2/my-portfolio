import React from 'react'

function View() {
  return (
    <div className='flex justify-start  '>
      <img src="profile_pic.jpg"
       alt="Full image"
       className='size-5/12' />
       <div className='flex flex-col justify-center md:mx-10'>
        <h3 
       className='text-6xl font1'>
        <span className='text-emerald-500'>
        Hii, 
        </span>
        </h3>
        
       <h3 className=' text-6xl'>
        <span className='font4 text-teal-500'>I am a Developer.</span>

       </h3>
       <h5>
        <span className='text-xl bg-yellow-300 text-white md:px-2 md:mx-1'>
            Javascript
        </span>
        <span className='text-xl bg-blue-300 text-white md:px-2 md:mx-1'>
            Typescript
        </span>
         <span className='text-xl bg-green-300 text-white md:px-2 md:mx-1'>
            Node JS
        </span>
        <span className='text-xl bg-blue-200 text-white md:px-2 md:mx-1'>
            React JS
        </span>
        
       </h5>
       </div>
    </div>
  )
}

export default View
