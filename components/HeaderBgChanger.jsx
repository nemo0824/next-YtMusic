"use client"
import useUIState from '@/hooks/useUIState'
import React, { useEffect } from 'react'

const HeaderBgChanger = ({imgSrc}) => {
  const {setHeaderImgSrc} = useUIState()
  useEffect(()=>{
    if(imgSrc) setHeaderImgSrc(imgSrc)
  },[imgSrc])
  return (
    <></>
  )
}

export default HeaderBgChanger;