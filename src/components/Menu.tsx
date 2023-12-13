import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Cart from './Cart';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen]= useState(false);

  const user = false;
  return (
          <div className=''>
      {/* {
        !open ?
         (<Image src='/open.png' alt='open' width={20} height={20} onClick={() => setOpen(true)} />) 
        :( <Image src='/close.png' alt='close' width={20} height={20} onClick={() => setOpen(false)}/>)
      } */}

      {/* shortcut */}
      {
        <Image src={ open ? "/close.png" : "/open.png" }
         alt=''
         onClick={()=> setOpen(!open)}
         width={20}
         height={20}
         className=' font-bold'
        />
       
      }

      {
        open && (
          <div className=' bg-red-500 text-white absolute top-24  h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 text-3xl z-10  left-0 w-full'>
            {
              links.map((link)=> (
                <Link href={link.url} key={link.id}
                 onClick={() => setOpen(false)}
                 
                >
                   {link.title}
                </Link>
              ))
            }
            <Link href={user ? '/orders' : 'login'}
              onClick={()=> setOpen(false)}
            >
            {user ? '/orders' : 'login'}
            </Link>
            <Link href='cart'
             onClick={()=> setOpen(!open)}
            >
              <Cart />
            </Link>
          </div>
        )
      }

      
      </div>
    
  )
}

export default Menu
