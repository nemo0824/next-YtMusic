"use client"
import { Song } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaCircle } from 'react-icons/fa'
import {AiOutlineCaretDown} from "react-icons/ai"
import { AiOutlineCaretUp } from 'react-icons/ai'
import { FiPlayCircle } from 'react-icons/fi'
import { FiThumbsDown } from 'react-icons/fi'
import { FiThumbsUp } from 'react-icons/fi'
import { FiMoreVertical } from 'react-icons/fi'
import IconButton from './elements/IconButton'
import { useRouter } from 'next/navigation'
import usePlayerState from '@/hooks/usePlayerState'

interface SongCardExpandProps{
    song: Song;
}

const SongCardExpand:React.FC<SongCardExpandProps> = ({song}) => {
    const {addSongList} = usePlayerState()
    const {channel, channelId} = song
    const {push} = useRouter()
    const onClickChannel = () =>{
        push(`/channel/${channelId}`)
    }
    const onClickPlay = () =>{
        addSongList([song])
    }
  return (
    <article className='flex flex-row gap-4 h-[48px] w-full items-center relative group'>
        <div className='w-[48px] h-[48px] relative'>
            <Image src={song.imageSrc} fill className='object-cover ' alt='img' />
            <section
                onClick={onClickPlay} 
                className='hidden group-hover:flex absolute top-0 left-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer'>
                <FiPlayCircle size={20}/>
            </section>
        </div>

        <div className='flex flex-row justify-between gap-4 basis-1/3'>
            <div className='w-[130px] truncate'>{song.name}</div>
            <div onClick={onClickChannel}className='flex-1 truncate text-neutral-500 hover:underline cursor-pointer'>{channel}</div>
        </div>

        <section className='hidden group-hover:flex absolute top-0 right-0 gap-6 flex-row h-[48px] justify-end items-center w-[120px] bg-[rgba(0,0,0,0.7)]'>
            <IconButton  icon={<FiThumbsDown size={20}/>}/>
            <IconButton  icon={<FiThumbsUp size={20}/>}/>
            <IconButton  icon={<FiMoreVertical size={20}/>}/>


        </section>
    </article>
  )
}

export default SongCardExpand