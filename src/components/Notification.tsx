import React from 'react'


const Notification = () => {
  return (
    <div className=' h-12 bg-red-500 text-white text-center flex items-center justify-center cursor-pointer text-sm md:text-base'>
      <marquee behavior="scroll" direction="roght" >Free delivery for over $50 dollar</marquee>
    </div>
  )
}

export default Notification
