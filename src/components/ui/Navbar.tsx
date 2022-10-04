import React, { useContext } from 'react'
import { UiContext } from '../../context'
import { Search } from './Search'

export const Navbar = () => {
    const { toggle, theme } = useContext(UiContext);
    return (
        <nav className={`fixed top-0 min-h-[4rem] flex items-center justify-between gap-2 py-2 md:my-0 md:mb-0 md:justify-between flex-wrap px-3 z-20 transition  ${toggle ? 'w-full' : 'md:pl-56 w-full'} ${theme}`}>
            <div className='flex overflow-x-auto items-center gap-2'>
                <button className="bg-blue-600 rounded-md px-2 text-xs font-semibold h-8 hover:bg-blue-700">
                    acción
                </button>
                <button className="bg-blue-600 rounded-md px-2 text-xs font-semibold h-8 hover:bg-blue-700">
                    rpg
                </button>
                <button className="bg-blue-600 rounded-md px-2 text-xs font-semibold h-8 hover:bg-blue-700">
                    deportes
                </button>
                <button className="bg-blue-600 rounded-md px-2 text-xs font-semibold h-8 hover:bg-blue-700">
                    estrategia
                </button>
                <button className="bg-blue-600 rounded-md px-2 text-xs font-semibold h-8 hover:bg-blue-700">
                    aventura
                </button>
            </div>
            <Search />
        </nav>
    )
}
