import React, { FC, useContext } from 'react'
import { Navbar } from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'
import { ButtonToggle } from '../ui/ButtonToggle';
import { UiContext } from '../../context';
import { ButtonDark } from '../ui/ButtonDark';
import { PageTransition } from '../ui/PageTransition';
interface Props {
    children: React.ReactNode
}

export const LayoutGame: FC<Props> = ({ children }) => {
    const { toggle, theme } = useContext(UiContext)
    return (
        <div className={`flex text-white w-full min-h-screen ${theme}`}>
            <Sidebar />
            <Navbar />
            <div className={`min-h-0 flex w-full transition-all ${toggle ? 'pl-auto pt-16' : 'md:pl-52 pt-20'}`}>
                {children}
            </div>
            <ButtonDark />
            <ButtonToggle />
            <PageTransition />
        </div>
    )
}
