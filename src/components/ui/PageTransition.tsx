import React, { useContext } from 'react'
import { UiContext } from '../../context'

export const PageTransition = () => {
    const { page, togglePage, selectGame } = useContext(UiContext);
    return (
        <div
            className={`fixed bottom-0 flex flex-col w-full h-screen z-50 transition duration-200 ${page ? 'enter-active-animation' : 'enter-animation'}`}>
            <div
                onClick={togglePage}
                className="w-full h-[10vh] bg-gray-900/30">

            </div>
            <div className='bg-[#141414] h-[90vh] flex justify-center flex-col items-center md:items-stretch md:flex-row-reverse'>
                <div className="flex flex-col  md:w-2/3 max-w-2xl gap-5 px-8 py-5 relative">
                    <button
                        onClick={togglePage}
                        title="close"
                        className="bg-[#141414] text-white text-sm font-semibold px-4 py-2 rounded-lg border border-white hover:bg-gray-800 transition-colors absolute top-3 right-10"
                    >
                        x
                    </button>
                    <h2 className='text-3xl font-semibold text-center '>{selectGame?.title}</h2>
                    <p className='text-xl text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id eos pariatur <br></br> culpa cum, eaque odio inventore rerum error voluptate!</p>
                    <p>
                        {selectGame?.genre}
                    </p>
                    <p className='text-xl'>${selectGame?.price}</p>
                    <button
                        className='bg-blue-600 rounded-lg w-full py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className='text-xl'>Buy Now</p>
                    </button>
                </div>
                <div className="flex w-full justify-center md:w-1/3 py-5 md:py-14 px-3">
                    <div className='overflow-hidden rounded-xl '>
                        <img
                            src={selectGame?.img}
                            alt={selectGame?.title}
                            className="w-64 h-72 md:w-full md:h-full object-cover object-center hover:scale-110 transition-transform"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
