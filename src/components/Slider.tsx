
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const data= [
  {
    id:1,
    title: 'always fresh & always crispy & always hot',
    image: '/slide1.png'
  },
  {
    id:1,
    title: "we deliver your order wherever you are in NY",
    image: '/slide2.png'
  },
  {
    id:1,
    title:  "the best pizza to share with your family",
    image: '/slide3.jpg'
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide]= useState(0);
     
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev=== data.length-1 ? 0 : prev + 1)),3000
      
    );
    return () => clearInterval(interval);
  }, []);
    
  return (
    <div className=' flex flex-col md:flex-row lg:px-20 xl:px-40 p-6 md:justify-between bg-fuchsia-50 gap-8  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] '>
      {/* text container */}
      <div className=' flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className=' text-5xl md:text-6xl lg:text-7xl text-clip uppercase p-4 md:p-10'>{data[currentSlide].title}</h1>
        <button className=' bg-red-500 text-white py-4  px-8'>Order Now</button>
      </div>
      <div className=' flex-1 w-full  relative '>
        <Image src={data[currentSlide].image} alt='' fill 
         className=' object-contain md:object-cover'
        />
      </div>
    </div>
  )
}

export default Slider
