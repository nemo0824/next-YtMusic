import { sleep } from '@/lib/utils';
import React from 'react'


const page = async () => {

 await sleep(2000)


  return (
    <div>HomePage

        {/* <div>case1</div>
        <div>
            root 4s
            home 2s
            -- 4s
        </div>
        <div>case2</div>
        <div>
            root 2s
            home 4s
            -- 2s -- home loading 2s - homepage
        </div>

        <div>case3</div>
        <div>
            root 4s
            home 2s
            -- 4s -- homepage
        </div> */}
    </div>
  )
}

export default page;
