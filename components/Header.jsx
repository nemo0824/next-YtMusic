
"use client"
import UserIcon  from '@/components/UserIcon'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import PagePadding from "@/components/PagePadding"
import {FaChromecast} from "react-icons/fa"
import { FiSearch } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Logo from './elements/Logo'
import Navigator from './elements/Navigator'
import useUIState from '@/hooks/useUIState'


const HeaderDrawer = ({children}) =>{
  // Header 열고 닫는 상태관리
  const [isOpen, setIsOpen] = useState(false)
  return (
  <Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
    <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent className='w-[240px] h-full'>
      <div className='py-6'>
        <div className='px-3'>
          {/* setIsOpen함수를 Header -> Logo -> IsIconButton 까지 전달  */}
          <Logo isInDrawer onClickClose={()=>{setIsOpen(false)}}/>
        </div>
          <Navigator></Navigator>
      </div>
    </DrawerContent>
   </Drawer>

  )
}

const Header = ({children}) => {
  const {headerImgSrc} = useUIState()
  const [isScrolled, setIsScrolled] = useState(false)
  const headRef = useRef()


  // 굳이 useEffect에서 실행하는 이유는? 
  // render함수에서 직접 작성한다면 매번 렌더링시마다 새로운 이벤트리스너가 생산됨으로 비효율적
  useEffect(()=>{
    // 스크롤을을 관리하는 함수 생성 
    const handleScroll = ()=>{
      const scrollValue = headRef?.current?.scrollTop;
      // useRef를 통해서 headRef의 scrollValue값 확인
      
      // scroll 되면 true scroll 되지않으면 false
      setIsScrolled(scrollValue !==0)
    };
    
    headRef?.current?.addEventListener("scroll", handleScroll)

    // clean업을 통해 언마운트 되거나 useEffect가 재실행될때 , 이전에 추가된 scroll 이벤트 리스너를 제거하여 메모리 누수를 방지함
    return () =>{
      headRef?.current?.removeEventListener("scroll", handleScroll)
    }
  },[])


  return (
    // headRef Ref 값참조 
    <header ref={headRef} className='relative overflow-auto w-full h-full '>
      <section className='absolute top-0 w-full'>
        <div className='relative h-[600px] w-full'>
          <Image 
          alt='mediaItem'
          className='object-cover'
          fill
          src={headerImgSrc || "https://plus.unsplash.com/premium_photo-1685311279547-ecd6086b7ccd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
          <div className='absolute bg-black opacity-40 top-0 w-full h-[600px]'></div>
          <div className='absolute bg-gradient-to-t from-black opacity-40 top-0 w-full h-[600px]'></div>
        </div>
      </section>
      <section className={cn("sticky top-0 left-0 z-10", isScrolled&& "bg-black")}>
        <PagePadding>
          <div className='flex flex-row justify-between items-center h-[64px]'>
            <article className='h-[42px] min-w-[480px] flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] hidden lg:flex'>
              <div><FiSearch size={24}/></div>
              <input type='text' className='w-full h-full bg-transparent'placeholder='노래검색'/>
            </article>
            <HeaderDrawer>
              <article className='lg:hidden'>
              <Logo />
              </article>
            </HeaderDrawer> 
            <article className='flex flex-row gap-8 items-center ' >
              <FaChromecast size={26}/>
              <UserIcon/>
            </article>
          </div>
         
        </PagePadding>
      </section>
      <section className='relative'>
        {children}
      </section>
    </header>
  )
}
// pc 버전때는 search 박스 보이게  아이콘 안보이게 
// 모바일 버전 search 박스 안보이게  아이콘 보이게
export default Header