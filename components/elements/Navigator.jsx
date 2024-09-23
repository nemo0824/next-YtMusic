"use client"
import React, { useMemo } from 'react'
import { GoHome } from 'react-icons/go'
import {FiPlus, FiMusic, FiCompass} from "react-icons/fi"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {dummyPlaylistArray} from "@/lib/dummyData"
import PlayListNav from "@/components/elements/PlayListNav"

const Navigator = () => {
    const pathName = usePathname()
    console.log('pathName', pathName)
    const routes = useMemo(()=>{
        return [
            {icon : <GoHome size={24}/> , label: "홈", isActive: pathName ==="/", href:"/"},
            {icon : <FiCompass size={24}/>, label: "둘러보기", isActive: pathName === "/explore", href:"/explore"},
            {icon : <FiMusic size={24}/>, label: "보관함", isActive: pathName === "/library", href:"/library"},
        ]
    }, [pathName])
  return (
    <div>
        <section className='flex flex-col gap-2 p-4'>
            {routes.map((route) => {
                return (
                <Link href={route.href} key={route.label}>
                    <div  className={cn('flex flex-row items-center text-[16px] gap-4  rounded-lg hover:bg-neutral-700 p-2', route.isActive && 'bg-neutral-800')} >
                        <span>{route.icon}</span>
                        {route.label}
                    </div>
                </Link>
                    )
            })}
        </section>
        <section className='px-6'>
            <div className='w-full h-[1px] bg-neutral-700'></div>
        </section>
        <section className='px-6'>
            <div className='flex flex-row items-center text-[16px] gap-2 bg-neutral-800 my-6 rounded-3xl p-2 font-[200] justify-center hover:bg-neutral-700 cursor-pointer'>
                <FiPlus size={24}></FiPlus>
                <span className=''>새 재생목록</span>
            </div>
        </section>
        <section>
            <ul className='flex flex-col'>
            {dummyPlaylistArray.map((playList) => {
             return  <PlayListNav key={playList.id} playList={playList}></PlayListNav>
            })}
            </ul>
        </section>
    </div>
  )
}

export default Navigator