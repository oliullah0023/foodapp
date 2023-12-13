
'use client'
import React, { useEffect, useState } from "react";


type Props = {
  price: number,
  id: number,
  options?: { title:string; additionalPrice: number}[]
}

const Price = ({price, id, options}: Props) => {

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(()=> {
   setTotal(
    quantity * (options ? price + options[selected].additionalPrice : price)
   )

  },[quantity,selected,options,price]);

  return (
    <div className=" flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-red-500">${total.toFixed(2)}</h2>
      {/* options container */}
      <div className=" flex gap-4">
        {
          options?.map((option, index)=> (
            <button key={option.title}
             style={{background: selected === index ? 'rgb(248 113 113)' : 'white',
             color: selected === index ? 'white' : 'red'
            }}
            className=" p-2 rounded-sm min-w-[6rem] ring-1 ring-red-500 gap-4 "
            onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))
        }
      </div>
{/* quantity and aadd button container */}
     <div className=" flex ">
      <div className=" flex justify-between w-full ring-1 ring-red-500 py-2 px-2 p-2">
      <span>Quantity</span>
      <div className=" flex gap-4 items-center mx-3 px-2 ">
        <button
          onClick={() => setQuantity((prev) => (prev > 1 ? prev -1 : 1) )}
        >{'< '}</button>
        <span>{quantity}</span>
        <button
         onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9) )}
        >{' >'}</button>
         
      </div>
     
      </div>
      <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 py-2">
          Add to Cart
        </button>
    </div>
   
    </div>
  )
}

export default Price
