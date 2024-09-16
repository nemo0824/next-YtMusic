"use client"
import React from 'react'
import {GridLoader} from "react-spinners"
const ErrorMessage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 my-20'>
        <GridLoader color='red'></GridLoader>
        <div className='text-[50px]'>oops</div>
        <div>다시한번 확인해주세요 </div>
    </div>
  )
}

export default ErrorMessage