import { createContext } from 'react';
import { Game } from '../../interfaces/game';

interface ContextProps {
    toggle: boolean;
    theme: string;
    page: boolean;
    selectGame: Game | null;
    toggleDrawer: () => void;
    toggleTheme: () => void;
    togglePage: () => void;
    selectedGame: (game: Game) => void;
}

export const UiContext = createContext({} as ContextProps)