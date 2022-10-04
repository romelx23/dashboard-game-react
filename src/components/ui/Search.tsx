import React from 'react'
import { FiSearch } from 'react-icons/fi'
export const Search = () => {
    return (
        <div className='relative'>
            <input type="text"
                id="search"
                className="rounded-md px-2 pl-6 text-xs font-semibold h-8 w-56 flex-shrink transition-colors search"
                placeholder="Buscar..."
            />
            <label htmlFor="search">
                <FiSearch className='absolute top-2 left-1 text-gray-400' />
            </label>
        </div>
    )
}
