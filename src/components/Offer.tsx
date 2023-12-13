import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'


const Offer = () => {
  return (
    <div className=' bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]  '
     style={{backgroundImage:`url(offerBg.png)`}}
    >
     {/* text container */}
     <div className=' flex-1 flex flex-col justify-center items-center gap-8 p-6'>
      <h1 className=' text-5xl text-white font-bold xl:text-6xl'>Delicious Burger & French Fry</h1>
      <p className=' text-white xl:text-xl'>Progressively simplify effective e-toilers nd process-centric method of empowerment. Quickly pontificate parallel </p>
      <CountDown />
      <button className=' bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
     </div>
     {/* Image container */}
     <div className=' flex-1 w-full relative md:h-full '>
       <Image src='/offerProduct.png' alt=' ' fill className=' object-contain' />
     </div>
    </div>
  )
}

export default Offer
