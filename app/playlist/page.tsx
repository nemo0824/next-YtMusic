import { getPlaylistById } from '@/lib/dummyData';
import { getRandomElementFromArray } from '@/lib/utils';
import { permanentRedirect } from 'next/navigation';
import React from 'react'
import HeaderBgChanger from "@/components/HeaderBgChanger"
import PagePadding from '@/components/PagePadding';
import PlayListHead from "@/components/PlayListHead"
import SongCardExpand from '@/components/SongCardExpand';
interface PlaylistPageProps {
  searchParams: {
    list: string;
  }
}
//자동완성  alt +space
const page = async (props: PlaylistPageProps) => {
  // console.log("props", props)
  const playList = await getPlaylistById(Number(props.searchParams.list))
  // console.log("----playList", playList)
  if (!playList) permanentRedirect("/")

  const imgSrc = getRandomElementFromArray(playList.songList)?.imageSrc
  console.log(imgSrc)
  return (
    <PagePadding>
      <HeaderBgChanger imgSrc={imgSrc}/>
      <div className='mt-6'></div>
      <PlayListHead playList={playList}/>
      <div className='mt-12'></div>
      <div className='lg:mt-[200px]'></div>
      <div className='flex flex-col gap-2'>
      {
        playList.songList.map((song, index)=>{
          return <SongCardExpand song={song} key={index}/>
        })
      }
      </div>
    </PagePadding>
  )
}

export default page;
