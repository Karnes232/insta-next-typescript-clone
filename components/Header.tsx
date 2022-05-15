import React from 'react'
import Logo from './HeaderComponents/Logo'
import SearchBar from './HeaderComponents/SearchBar'
import RightSideIcons from './HeaderComponents/RightSideIcons'

const Header = () => {


  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto'>
            <Logo />

            <SearchBar />

            <RightSideIcons/>
            
        </div>     
    </div>
  )
}

export default Header