import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const MiniProfile = () => {
  const { data: session }: any = useSession()
  
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        
        <img
            className='rounded-full border p-[2px] w-16 h-16' 
            src={session?.user?.image!}
            alt="" 
        />

        {/* <div className='rounded-full border p-[2px] w-16 h-16'>
          <Image 
            src={session?.user?.image!} 
            width={62}
            height={62}
            objectFit='contain'
            className='rounded-full'
          />
        </div> */}

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram!</h3>
        </div>

        <button 
          onClick={(event: React.MouseEvent<HTMLElement>) => {signOut()}}
          className='text-blue-400 text-sm font-semibold'
        >
          Sign out
        </button>
    </div>
  )
}

export default MiniProfile