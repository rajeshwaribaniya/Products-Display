import React from 'react'
import { Card } from './Card'
import {cardData} from '../data'

export  function ProductDisplay() {
  return (
    <>
    <div className='flex flex-col gap-8 m-12 '>
      
      <h1 className='text-center text-3xl font-bold'>Products Display</h1>

      <div className=' grid grid-cols-5  gap-3'>
        {cardData.map((data)=> {
        return(
          <Card
          key={data.id} 
          data = {data} />
        );

        
      })}
      </div>
    </div>
    
    
       
    </>
  )
}
