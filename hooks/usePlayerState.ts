import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import {create} from "zustand"

interface PlayerState{
    // 창 보일지 말지 저장하는 변수 
    isVisiblePlayer: boolean;
    // 창보일지 말지 수정하는 함수
    setIsVisiblePlayer: (isVisiblePlayer:boolean) => void;
    // 현재 재생곡 ? 없을수도 있음 값이 
    activeSong?: Song | null;
    // 이전곡
    prevPlayerQueue: Song[];
    // 다음곡
    nextPlayerQueue: Song[];
    // 기능들 (재생, 다음곡, 이전곡)
    addSongList: (songList: Song[]) => void;
    playNext: ()=> void;
    playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
    isVisiblePlayer: false,
    setIsVisiblePlayer:(isVisiblePlayer: boolean) => set({
        isVisiblePlayer
    }),
    
    activeSong: null,
    prevPlayerQueue: [],
    nextPlayerQueue: [],

    addSongList: (songList:Song[])=> set((prev) => {
        const prevSong = prev.activeSong;
        const cloneSongList = [...songList];
        const currentSong = cloneSongList.splice(0,1)?.[0]

        return{
            activeSong: currentSong,
            prevPlayerQueue: prevSong ? [prevSong, ...prev.prevPlayerQueue] : prev.prevPlayerQueue,
            nextPlayerQueue: [...cloneSongList],
            isVisiblePlayer:true

        }
    }),
    playNext: () => set((prev) =>{
        const currentSong = prev.activeSong;
        const nextSrc = prev.nextPlayerQueue.splice(0,1)?.[0];

        return{
            activeSong:nextSrc,
            nextPlayerQueue: prev.nextPlayerQueue,
            prevPlayerQueue: [ ...(currentSong ? [currentSong]:[]), ...prev.prevPlayerQueue]
        }
    }),
    playBack: () => set((prev)=> {
        const currentSong = prev.activeSong
        const preSrc = prev.prevPlayerQueue.splice(0,1)?.[0]

        return {
            activeSong: preSrc,
            nextPlayerQueue : [...(currentSong ? [currentSong]:[]) , ...prev.nextPlayerQueue],
            prevPlayerQueue : prev.prevPlayerQueue
        }
    }),


}))

export default usePlayerState;