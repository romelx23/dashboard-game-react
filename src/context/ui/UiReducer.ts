import { Game } from '../../interfaces/game';
import { UiState } from './UiProvider';

type UiActionType = 
| {type:'[Ui] - Drawer - Toggle'}
| {type:'[Ui] - Theme - Toggle'}
| {type:'[Ui] - Toggle Page'}
| {type:'[Ui] - Selected Game', payload: Game}

export const UiReducer = (state:UiState,action:UiActionType):UiState => { 
    switch (action.type) {
        case '[Ui] - Drawer - Toggle':
            return {
                ...state,
                toggle: !state.toggle
            };
        case '[Ui] - Theme - Toggle':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        case '[Ui] - Toggle Page':
            return {
                ...state,
                page: !state.page
            };
        case '[Ui] - Selected Game':
            return {
                ...state,
                selectGame: action.payload
            };
    
        default:
            return state;
    }
 }