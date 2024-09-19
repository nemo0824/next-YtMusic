import PagePadding from '@/components/PagePadding';
import React from 'react'
import Category from '@/app/explore/components/Category';
import { getAllPlaylist } from '@/lib/dummyData';
import PlayListCarousel from '@/components/PlayListCarousel';
import SongListCarousel from '@/components/SongListCarousel copy';
import { getSongListTop10 } from '@/lib/dummyData';
const page = async () => {

  // const playlistArray = await getAllPlaylist()
  // const songListTop10 = await getSongListTop10()

  const [playlistArray, songListTop10] = await Promise.all([getAllPlaylist(), getSongListTop10()])
  return (
    <PagePadding>
      <div className='mt-4'></div>
      <Category/>
      <div className='mt-20'></div>
      <PlayListCarousel 
            PlayListArray={playlistArray}
            title="새 앨범 및 싱글"
      />
      <div className='mt-20'></div>
      <SongListCarousel 
            songListTop10={songListTop10}
            title="새 앨범 및 싱글"
      />
        
    </PagePadding>
   
  )
}

export default page;