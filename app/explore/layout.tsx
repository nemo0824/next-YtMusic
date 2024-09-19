import React from 'react'
import Header from '@/components/Header'
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='w-full h-full'>
        {/* layout 먼저 렌더링 되고 children
        layout 안에 page가 들어온다고 생각하면됨 */}
        <Header>
        {children}
        </Header>
    </div>
  )
}

export default layout