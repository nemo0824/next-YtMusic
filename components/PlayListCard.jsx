"use client"
import Image from 'next/image'
import React from 'react'
import { getRandomElementFromArray } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import {MdMoreVert} from "react-icons/md"
import { FiPlay } from 'react-icons/fi'
import IconButton from './elements/IconButton'
const PlayListCard = ({playlist}) => {
    const {id, owner, playlistName, songList}= playlist
    const songListLength = songList.length
    const imageSrc = getRandomElementFromArray(songList).imageSrc
    const {push} = useRouter()
    const onClickCard = ()=>{
      push(`/playlist?list=${id}`)
    }
    const onClickPlay = () =>{

    }
  return (
    <article className="h-[240px] cursor-pointer group">
       <section onClick={onClickCard} className='relative h-[136px]'>
        <Image 
           src={imageSrc}
           fill={true}
           alt='thumbnail'
           className='object-cover'/>
        <div className='hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]'>
          <div className='absolute top-4 right-4'>
            <IconButton icon={<MdMoreVert size={20}/>}/>
          </div>
          <div onClick={onClickPlay} className='absolute bottom-4 right-4 flex justify-center items-center h-[45px] w-[45px] bg-[rgba(0,0,0,0.7)] rounded-full transform-gpu transition-transform hover:scale-110 hover:bg-[rgba(0,0,0,0.9)] pl-[1.5px]'>
           <FiPlay size={22} color='red'/>
          </div>
        </div>
       </section>
       <section className='mt-2'>
        <div>{playlistName}</div>
        <div className='text-neutral-500'>{`${owner} - ${songListLength}개`}</div>
       </section>
    </article>
  )
}

export default PlayListCard