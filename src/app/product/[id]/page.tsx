import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className=' p-4 h-screen xl:px-40 lg:px-20 flex flex-col justify-around text-red-500 md:flex-row md:gap-8'>
      {/* product container */}
      {
        singleProduct.img && (
          <div className=' relative w-full h-1/2 md:h-[70%]'>
            <Image src={singleProduct.img} alt='' fill 
             className=' object-contain'
            />
          </div>
        )
      }
      {/* text container */}
      <div className=' h-1/2 flex flex-col justify-center items-center md:h-[70%]'>
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
       <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
        </div>      
    </div>
  )
}

export default SingleProduct
