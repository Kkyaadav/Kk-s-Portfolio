import React from 'react'

function About() {
  return (
    <div className='flex flex-col'>
      <div className='text-center text-2xl md:text-3xl font-semibold m-8'>About Us</div>
     
     <div className='flex flex-col md:flex-row justify-around p-6 gap-5'>
      <div className='flex  flex-col justify-center items-center gap-2  md:w-[120vw] p-4'>
        <img className=' h-64 rounded-full min-w-64 border-pink-400 border-l-8' src="kke.png" alt="" />
        <div className='border rounded-lg p-2 border-gray-400 text-center text-gray-500'>
        <p className='text-black font-semibold dark:text-white'>Kailash Kumar P</p>
        <p >CEO | <span className='text-pink-500 font-semibold'>Laundary</span> Shop</p>
        </div>
      </div>
      <div className=' text-justify border rounded-lg border-gray-5 00 text-gray-500 md:border-0 md:border-l md:border-pink-500 p-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, necessitatibus corporis. Suscipit consectetur laborum provident fugit culpa magnam quia facere, optio enim. Animi consequatur corrupti et nam sed, rerum nisi inventore assumenda enim libero blanditiis quis ipsa? Animi repellendus, sit corporis, ipsam, nulla magni culpa doloribus accusamus libero iure eius et recusandae ab odit doloremque!
        Veniam, necessitatibus corporis. Suscipit consectetur laborum provident fugit culpa magnam quia facere, optio enim. Animi consequatur corrupti et nam sed, rerum nisi inventore assumenda enim libero blanditiis quis ipsa? Animi repellendus, sit corporis, ipsam, nulla magni culpa doloribus accusamus libero iure eius et recusandae ab odit doloremque!
        </p>
      </div>
     </div>

    </div>
  )
}

export default About