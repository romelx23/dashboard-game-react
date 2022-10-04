import React, { FC, useContext } from 'react'
import { UiContext } from '../../context'
export interface Props {
    card: {
        title: string,
        img: string,
        genre: string,
        year: string,
        price: string,
        descount?: string,
    }
}
export const CardSlide: FC<Props> = ({ card }) => {
    const { theme, togglePage, selectedGame } = useContext(UiContext)
    const handleScreen = () => {
        selectedGame(card)
        togglePage();
    }
    return (
        <div className={`${theme} card__slide`}>
            <div
                onDoubleClick={handleScreen}
                className="overflow-hidden rounded-lg">
                <img
                    src={card.img} alt={card.title}
                    title="action game"
                    className='w-80 md:w-96 h-48 object-cover hover:cursor-pointer hover:scale-110 transition-transform'
                />
            </div>
            <h2>{card.title}</h2>
            <p className='text-sm'>{card.genre}</p>
            <div className="flex gap-2">
                <p className='text-sm'>${card.price}</p>
                {/* {
                    card.descount && <p className='text-sm line-through'>${card.descount}</p>
                }
                {
                    card.descount && <p className='text-sm text-green-600'>-{card.descount}</p>
                } */}
                {
                    card.descount &&
                    <p className='text-sm bg-emerald-400/80 px-2 rounded-md'>{card.descount}</p>
                }
            </div>
        </div>
    )
}
