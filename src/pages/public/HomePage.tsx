import React from 'react'
import { CardHero, LayoutGame, SlideGames } from '../../components'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { games } from '../../assets/data/games.json'

export const HomePage = () => {
    return (
        <LayoutGame>
            <div className="flex flex-col w-full px-2">
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl h-96 mb-2 rounded-l-2xl overflow-hidden relative hero">
                        <img
                            src='https://i.blogs.es/89c3eb/fortnite-pase-1/1366_2000.jpeg'
                            alt="imagen de fondo"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute top-0 font-semibold py-3 px-4 z-10 flex w-full h-full flex-col justify-between">
                            <h2 className='font-bold'>Fornite</h2>
                            <div className="">
                                <span className='text-sm'>Update</span>
                                <h2 className='text-xl '>The hunt is on in fornite Chapter 10 - </h2>
                                <h2 className='text-xl'>Season 5: Zero Point</h2>
                                <button className='flex items-center gap-2 bg-blue-600 rounded-lg w-max p-2 hover:bg-blue-700 transition-colors'>
                                    <span>Play to free</span>
                                    <AiOutlineArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-2 w-32 md:w-48 h-96 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
                        {
                            games.map((game, index) => (
                                <CardHero game={game} />
                            ))
                        }
                    </div>
                </div>
                <SlideGames />
                <SlideGames />
                <SlideGames />
                {/* <div className="w-full h-96 bg-red-600/60 mb-2"></div> */}
                {/* <div className="w-full h-96 bg-blue-600/60 mb-2"></div> */}
            </div>
        </LayoutGame>
    )
}
