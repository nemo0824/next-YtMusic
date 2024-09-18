import { sleep } from '@/lib/utils';
import React from 'react'
import Category from '@/app/(site)/components/Category'
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon'

const page = async () => {
    const dummyPlayListArray1 = [...dummyPlaylistArray]
//  await sleep(2000)


  return (
    <PagePadding>
    <div className='min-h[600px] w-full'>
        <div className='mt-9'> </div>
        <Category/>
        <div className='mt-12'></div>
        <PlayListCarousel 
            PlayListArray={[...dummyPlayListArray1]}
            Thumbnail={<div className='w-[56px] h-[56px]'><UserIcon size={"lg"}/></div>}
            title="다시 듣기"
            subTitle='nemo'
        />
    
    </div>
    </PagePadding>
    

      
    
  )
}

export default page;
