import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromShared from  './shared.reducer';
import * as fromRoot from '../../state/app.state'

export interface SharedModuleState {
  shared: fromShared.SharedState
}

export interface State extends fromRoot.State {
  sharedModule: SharedModuleState
}

export const sharedReducers: ActionReducerMap<SharedModuleState, any> = {
  shared: fromShared.sharedReducer
}

export const selectSharedModuleState = createFeatureSelector<SharedModuleState>('shared');

export const selectSharedState = createSelector(
  selectSharedModuleState,
  (state: SharedModuleState) => state.shared
);

export const getGameId = createSelector(
  selectSharedModuleState,
  state => state.shared.gameId
);

export const getGuestPlayer = createSelector(
  selectSharedState,
  state => state.guest_player
);

export const getDealer = createSelector(
  selectSharedState,
  state => state.dealer
);
