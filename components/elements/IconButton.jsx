import React from 'react'

const IconButton = ({icon, onCLickIcon=()=>{}}) => {
  return (
    <div className='flex justify-center items-center w-[36px] h-[36px] rounded-full cursor-pointer hover:bg-[rgba(144,144,144,0.45)]'
         onClick={onCLickIcon}>
        {icon}
    </div>
  )
}

export default IconButton