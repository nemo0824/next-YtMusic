import UserIcon  from '@/components/UserIcon'
import Image from 'next/image'
import React from 'react'
import PagePadding from "@/components/PagePadding"
import {FaChromecast} from "react-icons/fa"
import { FiSearch } from 'react-icons/fi'
const Header = ({children}) => {
  return (
    <header className='relative overflow-auto w-full h-full'>
      <section className='absolute top-0 w-full'>
        <div className='relative h-[600px] w-full'>
          <Image 
          alt='mediaItem'
          className='object-cover'
          fill
          src="https://plus.unsplash.com/premium_photo-1685311279547-ecd6086b7ccd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <div className='absolute bg-black opacity-40 top-0 w-full h-[600px]'></div>
          <div className='absolute bg-gradient-to-t from-black opacity-40 top-0 w-full h-[600px]'></div>
        </div>
      </section>
      <section className='sticky'>
        <PagePadding>
          <div className='flex flex-row justify-between items-center h-[64px]'>
            <article className='h-[42px] min-w-[480px] flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]'>
              <div><FiSearch size={24}/></div>
              <input type='text' className='w-full h-full bg-transparent'placeholder='노래검색'/>
            </article> 
            <article className='flex flex-row gap-8 items-center ' >
              <FaChromecast size={26}/>
              <UserIcon/>
            </article>
          </div>
         
        </PagePadding>
      </section>
      <section className='absolute'>
        {children}
      </section>
    </header>
  )
}

export default Header