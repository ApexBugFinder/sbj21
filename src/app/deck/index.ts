import * as fromRoot from '../state/app.state';
import { ActionReducerMap, createFeatureSelector, createSelector, select } from '@ngrx/store';

import { Deck } from './models/deck';
import * as fromDeck from './state/deck-reducer';
import * as fromDeckShell from './deck-shell/state/deckshell-reducer';

export interface DeckModuleState
{
  deck: fromDeck.DeckState
  deckShell: fromDeckShell.DeckShellState
}

export interface State extends fromRoot.State {
  deckModule: DeckModuleState
}

export const deckReducers: ActionReducerMap<DeckModuleState, any> = {
  deck: fromDeck.reducer,
  deckShell: fromDeckShell.deckShellReducer
}

export const selectDeckModuleState = createFeatureSelector<DeckModuleState>('deck');


export const selectDeckState = createSelector(
  selectDeckModuleState,
  (state: DeckModuleState) => state.deck
);

export const getDeck = createSelector(
  selectDeckState,
  (state: fromDeck.DeckState) => {
    return Object.values(state.entities);
  }
);
export const getDeckCount = createSelector(
  selectDeckState,
  (state) => {
    return Object.values(state.entities).length
  }
)
export const selectDeckShellState = createSelector(
  selectDeckModuleState,
  (state: DeckModuleState) => state.deckShell
);

export const getDeckId = createSelector(
  selectDeckShellState,
  (state: fromDeckShell.DeckShellState) => state.id
);
export const getBackCard = createSelector(
  selectDeckShellState,
  (state: fromDeckShell.DeckShellState) => state.bkCard
)
export const getDisplayCards = createSelector(
  selectDeckShellState,
  (state: fromDeckShell.DeckShellState) => state.displayCards
);


export const getDeckShellError = createSelector(
  selectDeckShellState,
  (state: fromDeckShell.DeckShellState) => state.error
);
