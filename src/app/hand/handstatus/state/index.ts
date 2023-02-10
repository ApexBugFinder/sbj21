import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHandRoot from '../../index';
import {HandStatusState} from './handstatus.reducer'

export interface State extends fromHandRoot.HandModuleState{
  handStatusState:HandStatusState
}

const getHandStatusFeatureState = createFeatureSelector<HandStatusState>('handstatus');


export const getHandId = createSelector(
  getHandStatusFeatureState,
  (state) => state.handId
);
export const getHandStatus = createSelector(
  getHandStatusFeatureState,
  (state) => state.status
);
export const getHandStatusUsername = createSelector(
  getHandStatusFeatureState,
  (state) => state.username
);
export const getHandStatusError = createSelector(
  getHandStatusFeatureState,
  (state) => state.error
);

