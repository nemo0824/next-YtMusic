import { create } from "zustand"

const useUIState = create((set) =>({
    homeCategory:"",
    headerImgSrc:"https://plus.unsplash.com/premium_photo-1685311279547-ecd6086b7ccd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    setHomeCategory: (value) => set({homeCategory: value}),
    setHeaderImgSrc: (src) => set({headerImgSrc: src})

}))

export default useUIState