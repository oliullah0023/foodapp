import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row text-red-500 lg:flex-row p-4 lg:px-20 xl:px-40 gap-8'>
     {/* product container */}
     <div className=' flex-1 h-1/2 md:h-full lg:w-2/3'>
      {/* single item */}
      <div className='  flex flex-row gap-4 items-center justify-center'>
        <Image src='/temporary/p1.png' alt='' width={100} height={100} />
        <div>
        <h1 className=' uppercase text-xl font-bold'>Sicilian Pizza</h1>
        <p>Large</p>
        </div>
        <p className=' font-bold'>$24.00</p>
        <span className="cursor-pointer">X</span>
      </div>

      {/* single item */}
      <div className=' flex flex-row gap-4 items-center justify-center'>
        <Image src='/temporary/p2.png' alt='' width={100} height={100} />
        <div>
        <h1 className=' uppercase text-xl font-bold'>Beacon delux</h1>
        <p>Extra BBQ sauce</p>
        </div>
        <p className=' font-bold'>$29.00</p>
        <span className="cursor-pointer">X</span>
      </div>

      {/* single item */}
      <div className=' flex flex-row gap-4 items-center justify-center'>
        <Image src='/temporary/p3.png' alt='' width={100} height={100} />
        <div>
        <h1 className=' uppercase text-xl font-bold'>P. Arrabiata</h1>
        <p>Large</p>
        </div>
        <p className=' font-bold'>$24.00</p>
        <span className="cursor-pointer">X</span>
      </div>
     </div>

     {/* Payment container */}
     <div className=' h-1/2 md:h-full flex-1 flex flex-col  bg-fuchsia-50  p-4 gap-4 lg:w-1/3'>
     <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className=' my-2' />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
     </div>
    </div>
  )
}

export default CartPage
