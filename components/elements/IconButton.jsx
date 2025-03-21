import React from 'react'

const IconButton = ({icon, onClickIcon=()=>{}, size=36}) => {
  return (
    <div className={`flex justify-center items-center w-[${size}px] h-[${size}px] rounded-full cursor-pointer hover:bg-[rgba(246,194,194,0.45)]`}
         onClick={onClickIcon}>
        {icon}
    </div>
  )
}

export default IconButton
