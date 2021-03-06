import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="max-w-xs">
        <div className='mt-1 relative p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input 
                className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' 
                type="text" 
                placeholder='Search' 
            />
        </div>
    </div>
  )
}

export default SearchBar