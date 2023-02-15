import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromRoot from '../../../state/app.state';
import * as fromUserRoot from '../../index';
import { playerReducer, PlayerState } from './player.reducer';
export interface State extends fromUserRoot.UserModuleState {
  playerState: PlayerState;
}



export const getPlayerFeatureState = createFeatureSelector<PlayerState>('player');

export const getPlayer = createSelector(
  getPlayerFeatureState,
  (state) => state.player
);

export const getUsername = createSelector(
  getPlayerFeatureState,
  (state) => state.username
);


