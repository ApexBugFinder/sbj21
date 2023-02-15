import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHandRoot from '../../../index';
import { DealerHandResultsState } from './dealer-handresults.reducer';
import { setTestabilityGetter } from '@angular/core';


export interface State extends fromHandRoot.HandModuleState{
  dealerhandResultsState: DealerHandResultsState
}


const getHandResultsFeatureState = createFeatureSelector<DealerHandResultsState>('dealerhandresults');

export const getHandId = createSelector(
  getHandResultsFeatureState,
  (state) => state.handId
);

export const getUserId = createSelector(
  getHandResultsFeatureState,
  (state) => state.user_id
);
export const getPlayerLimit = createSelector(
  getHandResultsFeatureState,
  (state) => state.player_limit
);


export const gethighValue = createSelector(
  getHandResultsFeatureState,
  (state) => state.h_value
);

export const getlowValue = createSelector(
  getHandResultsFeatureState,
  (state) => state.l_value
);




