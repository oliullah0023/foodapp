import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'


const MenuPage = () => {
  return (
    <div className=' p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[clc(100vh-9rem)] flex flex-col md:flex-row items-center'>
     {
      menu.map((category)=> (
        <Link href={`/menu/${category.slug}`}
         key={category.id}
          style={{backgroundImage:`url(${category.img})`}}
          className=' w-full bg-cover h-1/3 p-8 md:h-1/2'
         >
         <div className={`text-${category.color} w-1/2`}>
          <h1 className=' uppercase font-bold text-2xl'>{category.title}</h1>
          <p className=' text-sm my-8'>{category.desc}</p>
          <button className={`hidden xl:block bg-${category.color} text-${category.color === 'black' ? 'white' : 'red-500'}`}>Explore</button>
         </div>
        </Link>
      ))
     }
    </div>
  )
}

export default MenuPage