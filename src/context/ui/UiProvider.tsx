import { FC, useReducer } from 'react'
import { Game } from '../../interfaces/game';
import { UiContext, UiReducer } from './../index'

export interface Props {
    children: React.ReactNode
}

export interface UiState {
    toggle: boolean;
    theme: string;
    page: boolean;
    selectGame: Game | null;
}

export const Ui_INITIAL_STATE: UiState = {
    toggle: false,
    theme: 'dark',
    page: false,
    selectGame: null
}

export const UiProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(UiReducer, Ui_INITIAL_STATE)
    const toggleDrawer = () => {
        dispatch({ type: '[Ui] - Drawer - Toggle' })
    }
    const toggleTheme = () => {
        dispatch({ type: '[Ui] - Theme - Toggle' })
    }
    const togglePage = () => {
        dispatch({ type: '[Ui] - Toggle Page' })
    }
    const selectedGame = (game: Game) => {
        dispatch({ type: '[Ui] - Selected Game', payload: game })
    }
    return (
        <UiContext.Provider
            value={{
                ...state,
                toggleDrawer,
                toggleTheme,
                togglePage,
                selectedGame
            }}
        >
            {children}
        </UiContext.Provider>
    );
};
