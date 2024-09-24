import HeaderBgChanger from '@/components/HeaderBgChanger';
import PagePadding from '@/components/PagePadding';
import { getChannelById } from '@/lib/dummyData';
import { getRandomElementFromArray } from '@/lib/utils';
import { permanentRedirect, useRouter } from 'next/navigation';
import DarkButton from  "@/components/elements/DarkButton"
import WhiteButton from "@/components/elements/WhiteButton"
import React from 'react'
import { FiMusic, FiShuffle } from 'react-icons/fi';
import SongCardExpand from '@/components/SongCardExpand';
import PlayListCarousel from '@/components/PlayListCarousel';
interface ChannelPageProps{
  params:{
    id:string;
  }
}

const page = async (props: ChannelPageProps) => {
   const channel = await getChannelById(Number(props.params.id))
  //  console.log("channel", channel)
   if(!channel) return permanentRedirect("/")

    const imgSrc = getRandomElementFromArray(channel.songList)?.imageSrc
    console.log("channnel", imgSrc)
    return (
      <PagePadding>
       <HeaderBgChanger imgSrc={imgSrc}/>
        <div className="mt-[150px]"></div>
        <section>
         <div className='text-[28px] font-bold'>{channel.name}</div>
         <article className='lg:hidden'>
            <div>
              <DarkButton className={"w-[230px] flex justify-center"} label={"구독중 4.18만"}/>
            </div>
            <div className='flex flex-row gap-4 mt-4'>
              <WhiteButton className='' label={"셔플"} icon={<FiShuffle size={16}/>}/>
              <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16}/>}/>
            </div>
         </article>
         <div className='hidden lg:flex flex-row gap-4 items-center text-[14px] mt-4'>
         <WhiteButton className='' label={"셔플"} icon={<FiShuffle size={16}/>}/>
         <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16}/>}/>
         <DarkButton className={"w-[230px] flex justify-center"} label={"구독중 4.18만"}/>
         </div>
        </section>
        <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">노래</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, key) => {
              return <SongCardExpand song={song} key={key} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className=" text-[28px] font-bold">앨범</div>
        <PlayListCarousel PlayListArray={channel.playlistArray} />
      </section>
      <section className="mt-[80px]"></section>
      </PagePadding>
    );
  };
  
  export default page;