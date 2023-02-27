import { createFeatureSelector } from '@ngrx/store';
import * as fromDeckRoot from '../index';
import { DeckState } from './deck-reducer';
export interface State extends fromDeckRoot.DeckModuleState{
  deckstate: DeckState
}
// const getDeckFeatureState = createFeatureSelector<DeckState>('deck');



