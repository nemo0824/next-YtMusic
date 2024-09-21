"use client"
import React from 'react'
import IconButton from './elements/IconButton'
import { FiMoreVertical } from 'react-icons/fi'
import Image from 'next/image'
import { getRandomElementFromArray } from '@/lib/utils'
import UserIcon from './UserIcon'
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi2";
import { RiShareForwardLine } from "react-icons/ri";
import { FiPlay } from 'react-icons/fi'
const PlayListHead = ({playList ={}} = {}) => {
    const { id, owner, playlistName, songList } = playList
    const randomSong = getRandomElementFromArray(songList)
  return (
   <section className='flex flex-col items-center gap-[50px] lg:flex-row'>
    <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center gap-5 text-[14px]'>
            <UserIcon className='w-[16px] h-[16px]'/>{owner}
        </div>
        <div className='h-[200px] w-[200px] relative lg:w-[264px] lg:h-[264px]'>
            <Image src={randomSong?.imageSrc} fill alt='songImg' />
        </div>
    </div>
    <article className='flex flex-col flex-grow justify-between lg:h-[260px] lg:mt-[40px]'>
        <div className='font-bold text-[28px]'>{playlistName}</div>
        <div className='text-neutral-400 mt-4 text-[14px]'>
            <div>{`앨범 . ${owner} . 2019 `}</div>
            <div>{`${songList.length}곡 . 15qns`}</div>
        </div>
        <div className='flex flex-row mt-2 gap-3 items-center'>
        <div className='bg-neutral-700 rounded-full w-[40px] h-[40px] flex flex-row justify-center items-center hover:bg-[rgba(144,144,144,0.45)]'><MdOutlineFileDownload size={24}/></div>
            <div className='bg-neutral-700 rounded-full w-[40px] h-[40px] flex flex-row justify-center items-center hover:bg-[rgba(144,144,144,0.45)]'> <HiOutlinePencil size={24}/></div>
            <div className='bg-white rounded-full w-[60px] h-[60px] flex flex-row justify-center items-center hover:bg-[rgba(144,144,144,0.45)]'><FiPlay size={40} color='black'/></div>
            <div className='bg-neutral-700 rounded-full w-[40px] h-[40px] flex flex-row justify-center items-center hover:bg-[rgba(144,144,144,0.45)]'><RiShareForwardLine size={24}/></div>
            <div className='bg-neutral-700 rounded-full w-[40px] h-[40px] flex flex-row justify-center items-center hover:bg-[rgba(144,144,144,0.45)]'><FiMoreVertical size={24}/></div>
        </div>
    </article>
   </section>
  )
}

export default PlayListHead