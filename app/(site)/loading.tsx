"use client"
import React from 'react'
import {BarLoader} from "react-spinners"
import LoadingBar from "@/components/LoadingBar"

const loading = () => {
  return (
    <div className='w-full'>
        {/* BarLoader 안에 useState 상태를 가지고있기때문에  clinet 사이드로한거임 */}
        <LoadingBar/>
    </div>
  )
}

export default loading