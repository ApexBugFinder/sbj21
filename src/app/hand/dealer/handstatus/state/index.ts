import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHandRoot from '../../../index';
import {DealerHandStatusState} from './dealer-handstatus.reducer'

export interface State extends fromHandRoot.HandModuleState{
  handStatusState:DealerHandStatusState
}

const getHandStatusFeatureState = createFeatureSelector<DealerHandStatusState>('dealerhandstatus');


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

