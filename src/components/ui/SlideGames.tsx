import React from 'react'
import { cards } from '../../assets/data/cards.json';
import { CardSlide } from './CardSlide';
export const SlideGames = () => {
    return (
        <div className='flex flex-col items-center h-96'>
            <div className='slide__header'>
                <h2 className='font-semibold pl-5'>Games On Sale</h2>
                <div className='flex flex-row gap-3'>
                    <button className='hover:cursor-pointer opacity-70'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button className='hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                </div>
            </div>
            <div className="flex flex-row gap-3 w-full max-w-5xl overflow-x-auto py-2">
                {
                    cards.map((card, index) => (
                        <CardSlide key={index} card={card} />
                    ))
                }
            </div>
        </div>
    )
}
