
import { ActionReducerMap } from '@ngrx/store';
import { DeckShellState, deckShellReducer } from '../deck/deck-shell/state/deckshell-reducer';
import { PlayerState , playerReducer} from '../user/player-shell/state/player.reducer';
import { UserModuleState, userReducers } from '../user';
import { DeckModuleState, deckReducers } from '../deck';
import { DealerState, dealerReducer} from '../user/dealer-shell/state/dealer.reducer';

export interface State {
  // user: UserModuleState;
  player: PlayerState,
  dealer:DealerState,
  deckShellState: DeckShellState

}
export const appReducers: ActionReducerMap <State, any> = {
  player: playerReducer,
  dealer: dealerReducer,
  deckShellState: deckShellReducer
};
