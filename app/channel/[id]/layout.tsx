import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        layout 먼저 렌더링 되고 children
        layout 다음에 page가 들어온다고 생각하면됨
        {children}
    </div>
  )
}

export default layout