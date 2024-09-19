import PagePadding from '@/components/PagePadding';
import React from 'react'
import Category from '@/app/explore/components/Category';

const page = () => {
  return (
    <PagePadding>
      <div className='mt-4'></div>
      <Category/>
    </PagePadding>
   
  )
}

export default page;