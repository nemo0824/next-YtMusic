"use client"
import React from 'react'
import useUIState from '../../../hooks/useUIState'
import {homeCategoryList} from "@/lib/dummyData"
import { cn } from '@/lib/utils'

// category Main화면에서 선택하여 이미지를 바꾸는 용도

const Category = () => {
    const {homeCategory, headerImgSrc, setHomeCategory, setHeaderImgSrc} = useUIState()
    const onClickCategory = (item) =>{
        if(homeCategory === item.label){
        //   버튼을눌렀을때 해지
        setHeaderImgSrc("")
        setHomeCategory("")
        }else{
        // 버튼눌렀을때 그관련 이미지로 변경, 카테고리 눌러져있게
        setHeaderImgSrc(item.src)
        setHomeCategory(item.label)
        }
    }
  return (
   <ul className='max-w-full flex overflow-x-auto flex-row gap-4'>
    {homeCategoryList.map((item) => 
        <li 
            onClick={()=>onClickCategory(item)}
            key={item.label}
            className={cn("h-[38px] min-w-fit px-3 flex justify-center items-center border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)]", 
            item.label === homeCategory && "bg-white text-black hover:bg-white")}>
        {item.label}
        </li>)}
    </ul>
  )
}

export default Category