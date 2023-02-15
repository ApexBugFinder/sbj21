import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHandRoot from '../../../index';
import {PlayerHandStatusState} from './player-handstatus.reducer'

export interface State extends fromHandRoot.HandModuleState{
  handStatusState:PlayerHandStatusState
}

const getHandStatusFeatureState = createFeatureSelector<PlayerHandStatusState>('playerhandstatus');


export const getPlayerHandId = createSelector(
  getHandStatusFeatureState,
  (state) => state.handId
);
export const getPlayerHandStatus = createSelector(
  getHandStatusFeatureState,
  (state) => state.status
);
export const getPlayerHandStatusUsername = createSelector(
  getHandStatusFeatureState,
  (state) => state.username
);
export const getPlayerHandStatusError = createSelector(
  getHandStatusFeatureState,
  (state) => state.error
);

