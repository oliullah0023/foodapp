import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CtegoryPage = () => {
  return (
    <div className=' flex flex-wrap text-red-500'>
      {
        pizzas.map((item) => (
          <Link key={item.id}
           href={`/product/${item.id}`}
           className=' w-full h-[60vh] border-r-2 border-b-2 border-red-500 flex flex-col  sm:w-1/2 md:w-1/3 group  odd:bg-fuchsia-50 p-2'
          >
            {/* Image container */}
            {
              item.img && (
                <div className=' relative h-[80%]'>
                  <Image src={item.img} alt='' fill 
                   className=' object-contain'
                  />
                </div>
              )
            }
          {/* text container */}
          <div className=' flex items-center justify-between p-2 font-bold'>
             <h1 className=' text-2xl uppercase p-2'>{item.title}</h1>
             <h2 className=' group-hover:hidden text-xl'>{item.price}</h2>
             <button className=' hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
          </div>
          </Link>
        ))
      }
      
    </div>
  )
}

export default CtegoryPage
