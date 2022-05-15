import { DotsHorizontalIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

interface Props {
    username: string,
    userImg: string,
  }

const Header = ({username, userImg}: Props) => {
  return (
    <div className='flex items-center p-5'>

      <div className='rounded-full h-12 w-12 object-contain border p-1 mr-3'>
        <Image 
          src={userImg}
          height={47}
          width={47}
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
        />
      </div>
      

        
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
    </div>
  )
}

export default Header