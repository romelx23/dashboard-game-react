import React, { FC } from 'react'
interface Props {
    game: {
        id: number,
        title: string,
        img: string
    }
}
export const CardHero: FC<Props> = ({ game }) => {
    return (
        <div className="card__game">
            <img
                src={game.img} alt={game.title}
                className="w-full md:flex-1 md:w-20 h-24 object-cover object-center"
            />
            <div className="font-semibold p-2 z-10 w-full flex-col justify-between flex">
                <h2>{game.title}</h2>
            </div>
        </div>
    )
}
