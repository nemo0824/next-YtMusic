import React from 'react'

interface ChannelPageProps{
  params:{
    id:string;
  }
}

const page = (props: ChannelPageProps) => {
    console.log(props)
    console.log(props.params)
  return (
    <div>channel/[{props.params.id}]</div>
  )
}

export default page;