import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'

import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/modalAtom'

import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

const RightSideIcons = () => {
  const [open, setOpen] = useRecoilState(modalState)
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="flex justify-end items-center space-x-4">
        <HomeIcon onClick={() => router.push('/')} className='navBtn'/>
        <MenuIcon className='h-6 md:hidden cursor-pointer'/>

        {
          session? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className="absolute -top-1 -right-2 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                    3
                </div>
              </div>
              <PlusCircleIcon 
                onClick={() => setOpen(true)}
                className='navBtn' 
              />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn pr-4' />
              
              <Image 
                src={session?.user?.image!} 
                width={40}
                height={40}
                objectFit='contain'
                className='rounded-full cursor-pointer'
                onClick={(event: React.MouseEvent<HTMLElement>) => {signOut()}}
              />
            </>
          ) : (
              <button onClick={(event: React.MouseEvent<HTMLElement>) => {signIn()}}>Sign In</button>
          )
        }        
        
                
    </div>
  )
}

export default RightSideIcons