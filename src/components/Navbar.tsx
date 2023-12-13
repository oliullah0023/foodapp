'use client'
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'
import Cart from './Cart'

const Navbar = () => {
  const user = false;
  return (
    <div className=' h-12 text-red-600 p-4 flex justify-between items-center border-b-2  border-red-600 md:h-24 lg:px-20 xl:px-40 '>
      <div className=' text-xl md:flex gap-2 hidden'>
        <Link href='/'>Homepage</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/'>Contact</Link>
      </div>

      <div className=' text-2xl font-bold'>
        <Link href="/">
         Massimo        
        </Link>
      </div>

      <div className=' md:hidden flex'>
     <Menu />
     </div>
      <div className=' hidden md:flex p-2 gap-2 justify-center items-center'>
        <div className=' flex p-2 bg-red-500 text-white'>
          <Image src='/phone.png' alt='' width={20} height={20} />
        <p>222 54 633</p>
        </div>

        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}

        <Cart />
      </div>
     
    </div>
  )
}

export default Navbar
