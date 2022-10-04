import React, { useContext } from 'react'
import { MdOutlineLegendToggle } from 'react-icons/md'
import { UiContext } from '../../context'
export const ButtonToggle = () => {
    const { toggleDrawer } = useContext(UiContext);
    return (
        <button
            onClick={toggleDrawer}
            className='bg-gray-700 rounded-full px-2 text-lg font-semibold h-8 hover:bg-gray-600 fixed bottom-4 right-4 z-10'
        >
            <MdOutlineLegendToggle />
        </button>

    )
}
