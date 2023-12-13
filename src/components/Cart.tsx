'use client'
import Image from 'next/image'
import Link from 'next/link'


const Cart = () => {
  
  return (
    <div className=' flex gap-2'>
      <Link href='/cart'
        className='flex flex-row items-center justify-center'
      >
      <Image src='/cart.png' alt='' height={20} width={20} />
      <div>
        <p>Cart(3)</p>
      </div>
      </Link>
    </div>
  )
}

export default Cart
