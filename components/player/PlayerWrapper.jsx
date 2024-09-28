"use client"
import React from 'react'
import usePlayerState from '@/hooks/usePlayerState'
import PlayerContent from"@/components/player/PlayerContent"

const PlayerWrapper = () => {
  const {isVisiblePlayer} = usePlayerState()

  if(!isVisiblePlayer)return null
  return (
    <div className='fixed bottom-0 h-[472px] w-full bg-neutral-900'>
     <PlayerContent/>
    </div>
  )
}

export default PlayerWrapper