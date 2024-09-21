import { generateRandomHex } from '@/lib/utils'
import React from 'react'

const GenreCard = ({genre}) => {
    const hex = generateRandomHex();
  return (
    <div className='flex flex-row h-[48px] w-full cursor-pointer rounded-lg bg-neutral-800'>
         <div className='w-2 h-full rounded-l-lg'  style={{backgroundColor : hex}}></div>
         <div className='flex px-4 justify-center items-center '>{genre}</div>
    </div>
   
  )
}

export default GenreCard