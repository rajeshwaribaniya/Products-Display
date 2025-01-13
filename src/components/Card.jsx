import React from 'react'


export  function Card({data}) {
  return (
    <>
        <div className='flex flex-col border shadow-md gap-3 p-3 w-56 rounded-xl hover:shadow-2xl'>

            {/* image part */}
            <img src = {data.image} className='h-36'/>

            {/* description part */}
            <div className='flex flex-col gap-2'>

                {/* product name */}
                <div className='line-clamp-2'>{data.productName}</div>

                {/* price, original price, discount */}
                <div className='flex flex-col'>

                  {/* price + original */}
                  <div className='font-medium'>{data.price}</div>

                   {/* cut off + discount */}
                  <div className='flex gap-2 text-[#858585]'>
                      <p className='line-through'>{data.originalPrice}</p>
                      <p>{data.discount}</p>
                  </div>
                  </div>
                

               
            </div>
        </div>
    </>
  )
}
