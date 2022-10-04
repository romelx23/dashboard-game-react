import React, { useContext } from 'react'
import { RiHome3Line, RiGamepadLine, RiSettings3Line, RiLogoutBoxLine } from 'react-icons/ri'
import { TbFlame } from 'react-icons/tb'
import { FaUserCircle, FaUserFriends } from 'react-icons/fa'
import { BiDownload } from 'react-icons/bi'
import { UiContext } from '../../context'

export const Sidebar = () => {
    const { toggle, theme } = useContext(UiContext);
    return (
        <div className={`fixed top-0 w-52 h-full overflow-y-auto border-r border-gray-700 flex flex-col justify-between transition-transform  z-30 ${toggle ? '-translate-x-52' : 'translate-x-0'} ${theme === 'dark' ? 'bg-[#141414] text-white' : 'bg-gray-200 text-gray-900'}`}>
            <div className="flex flex-col">
                <div className='flex items-center my-6'>
                    <div className='ml-4'>
                        <img src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg' alt='Workflow' className='h-8 w-auto' />
                    </div>
                    <div className='ml-4'>
                        <h1 className='text-2xl'>Dashboard</h1>
                    </div>
                </div>
                <ul className='px-2 my-2'>
                    <li>
                        <a
                            href="#"
                            className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                        >
                            <RiHome3Line />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                        >
                            <TbFlame />
                            <span>Store</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>

                            <span>Library</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                        >
                            <FaUserFriends />
                            <span>Friends</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            <span>Home</span>
                        </a>
                    </li>
                </ul>
            </div>
            <ul className='px-2 my-2 pb-6'>
                <li>
                    <a
                        href="#"
                        className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                    >
                        <BiDownload />
                        <span>Downloads</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Settings</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className='flex items-center gap-2 px-4 pl-5 py-2 rounded-md transition-colors hover:bg-gray-700/30 hover:text-white'
                    >
                        <FaUserCircle />
                        <span>Romel Alexis</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
