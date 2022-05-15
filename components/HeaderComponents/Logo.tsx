import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
    const router = useRouter()
  return (
    <>
        <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
            <Image src='https://links.papareact.com/ocw' 
                layout='fill'
                objectFit='contain'
                priority
            />
        </div>
        <div onClick={() => router.push('/')} className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
            <Image src='https://links.papareact.com/jjm' 
                layout='fill'
                objectFit='contain'
            />
        </div>
    </>
  )
}

export default Logo