import { sleep } from '@/lib/utils';
import React from 'react'
import Category from '@/app/(site)/components/Category'
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon'

const page = async () => {
    const dummyPlayListArray1 = [...dummyPlaylistArray]
    const dummyPlayListArray2 = [await getPlaylistById(1)]
    const dummyPlayListArray3 = [await getPlaylistById(2)]
    const dummyPlayListArray4 = [await getPlaylistById(3)]
    
//  await sleep(2000)


  return (
    <PagePadding>
    <div className='min-h[600px] w-full'>
        <div className='mt-9'> </div>
        <Category/>
        <div className='mt-20'></div>
        <PlayListCarousel 
            PlayListArray={[...dummyPlayListArray1]}
            Thumbnail={<div className='w-[56px] h-[56px]'><UserIcon size={"lg"}/></div>}
            title="다시 듣기"
            subTitle='nemo'
        />
        <div className='mt-20'></div>
        <PlayListCarousel 
            PlayListArray={[...dummyPlayListArray2]}
            title="어쩌구 노래"
            subTitle='새로운 앨범'
        />
        <div className='mt-20'></div>
        <PlayListCarousel 
            PlayListArray={[...dummyPlayListArray3]}
            title="커뮤니티제공"
            subTitle='nemo'
        />
        <div className='mt-20'></div>
         <PlayListCarousel 
            PlayListArray={[...dummyPlayListArray4]}
            title="커버 및 리믹스"
        />
    
    </div>
    </PagePadding>
    

      
    
  )
}

export default page;
