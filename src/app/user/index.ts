import * as fromRoot from '../state/app.state';
import * as fromPlayerShell from './player-shell/state/player.reducer';
import * as fromDealerShell from './dealer-shell/state/player.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserModuleState
{
  player: fromPlayerShell.PlayerState
  dealer: fromDealerShell.DealerState
 }

export interface State extends fromRoot.State {
   userModule: UserModuleState
 }


export const userReducers: ActionReducerMap<UserModuleState, any> = {
  player: fromPlayerShell.playerReducer,
  dealer: fromDealerShell.playerReducer
}

export const selectUserModuleState = createFeatureSelector<UserModuleState>('user');


export const selectPlayerShellState = createSelector(
  selectUserModuleState,
  (state: UserModuleState) => state.player
);

export const selectDealerShellState = createSelector(
  selectUserModuleState,
  (state: UserModuleState) => state.dealer
);

