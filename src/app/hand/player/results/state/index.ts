import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHandRoot from '../../../index';
import { PlayerHandResultsState } from './player-handresults.reducer';



export interface State extends fromHandRoot.HandModuleState{
  playerhandResultsState: PlayerHandResultsState
}


const getHandResultsFeatureState = createFeatureSelector<PlayerHandResultsState>('playerhandresults');

export const getPlayerHandId = createSelector(
  getHandResultsFeatureState,
  (state) => state.handId
);

export const getPlayerUserId = createSelector(
  getHandResultsFeatureState,
  (state) => state.user_id
);
export const getPlayerPlayerLimit = createSelector(
  getHandResultsFeatureState,
  (state) => state.player_limit
);


export const getPlayerhighValue = createSelector(
  getHandResultsFeatureState,
  (state) => state.h_value
);

export const getPlayerlowValue = createSelector(
  getHandResultsFeatureState,
  (state) => state.l_value
);




