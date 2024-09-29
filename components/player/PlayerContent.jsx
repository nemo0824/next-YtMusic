import React ,{useCallback, useEffect}from 'react'
import { Slider as PlayerSlider} from '@/components/ui/playerSlider'
import {useAudio} from 'react-use';
import { IoPlaySkipBackSharp, IoPlaySkipForward, IoPlaySkipForwardSharp, IoShuffle, IoVolumeHighOutline } from 'react-icons/io5';
import { AiFillCaretUp, AiOutlinePause } from 'react-icons/ai';
import usePlayerState from '@/hooks/usePlayerState';
import { ClipLoader } from 'react-spinners';
import { RiPlayFill } from 'react-icons/ri';
import Image from 'next/image';
import { RxLoop } from 'react-icons/rx';

const PlayerContent = () => {
  const {activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext} = usePlayerState()
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src,
    autoPlay: true,
  });
  
  const isLoading = activeSong?.src && state.buffered?.length ===0;

  const onClickPreBtn = () =>{
    if(state.playing && state.time>10){
      controls.seek(0)
      return;
    }
    if(prevPlayerQueue.length ===0){
      return;
    }
    playBack()
  }
  const onClickNextBtn = useCallback(
    () =>{
      if(nextPlayerQueue.length ===0){
        controls.pause()
      }else{
        playNext()
      }
    },[controls,playNext, nextPlayerQueue])
  const onClickPauseBtn = () =>{
    controls.pause()
  }
  const onClickStartBtn = () =>{
    if(activeSong){
      controls.play()
    }else{
      playNext()
    }
  }

 

 useEffect(()=>{
  const refAudio = ref.current;
  refAudio.addEventListener("ended", onClickNextBtn);
  return ()=>{
    refAudio.removeEventListener("ended", onClickNextBtn);
  }
 },[ref, onClickNextBtn])
 

  return (
    <div className='h-full w-full relative'>
      <div className='absolute top-[-16px] w-full'>
      <PlayerSlider className='w-full' defaultValue={[0]} value={[state.time]} max={state.duration} onValueChange={(value) =>{
        controls.seek(value)
      }}/>
      </div>
      {audio}
     <section className='flex flex-row justify-between items-center w-full h-full'>
      <div className='flex flex-row items-center justify-center h-full gap-1 lg:gap-8'>
        {/* 재생 할때 멈출때 삼항연산자로 아이콘 교체 */}
        <IoPlaySkipBackSharp size={24} className='cursor-pointer' onClick={onClickPreBtn}/>
        { isLoading ? (<ClipLoader color='#FFF'/>) : state.playing ? (    <AiOutlinePause size={40} className='cursor-pointer' onClick={onClickPauseBtn}/>) : (   <RiPlayFill size={40} className='cursor-pointer' onClick={onClickStartBtn}/>)}
        <IoPlaySkipForwardSharp size={24} className='cursor-pointer' onClick={onClickNextBtn}/>
      </div>

      <article>
        <div className='flex flex-row gap-4 items-center'>
          <div className='relative w-[40px] h-[40px] '>
            <Image fill className="object-cover" src={activeSong?.imageSrc} alt="img"></Image>
          </div>
          <div className='flex flex-col'>
            <div>{activeSong?.name}</div>
            <div className='text-neutral-500 text-[14px]'>{activeSong?.channel} 어쩌구 조회수 좋아요</div>
          </div>
        </div>
      </article>

      <article className='flex flex-row gap-2'>
        <div className='flex flex-row gap-2 hidden lg:flex'>
          <IoVolumeHighOutline size={24} className='cursor-pointer'/>
          <IoShuffle size={24} className='cursor-pointer'/>
          <RxLoop size={24} className='cursor-pointer'/>
        </div>
        <div>
          <AiFillCaretUp size={24} className='cursor-pointer'/>
        </div>
      </article>
     </section>
    </div>
    
  )
}

export default PlayerContent