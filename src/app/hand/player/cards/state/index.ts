import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHandRoot from '../../../index';
import * as fromHand from '../../../index'
import { PlayerHandCardsState } from './player-handcards.reducer';


export interface State extends fromHandRoot.HandModuleState{
  handcardsState: PlayerHandCardsState
}

const getHandCardsFeatureState = createFeatureSelector<PlayerHandCardsState>('playerhandcards');

export const selectAllCardEntites = createSelector(
  getHandCardsFeatureState,
  (state) => state.entities
);

export const selectCardIds = createSelector(
  getHandCardsFeatureState,
  (state) => state.ids
);

export const selectAllCards = createSelector(
  getHandCardsFeatureState,
  (state) => {
    return Object.values(state.entities);
  }
);
export const selectHighValue = createSelector(
  getHandCardsFeatureState,
  (state) => {
    let count = 0;

    Object.values(state.entities).forEach(i => {
      count = count + i.h_value;
    })
    return count;
  });

export const selectLowValue = createSelector(
  getHandCardsFeatureState,
  (state) => {
    let count = 0;
    Object.values(state.entities).forEach(i => {
      count = count + i.l_value;
    });
    return count;
  }
);

export const selectTotalCardsCount = createSelector(
  getHandCardsFeatureState,
  (state) => {
    return Object.values(state?.entities).length;
  }
);
export const selectCardId = createSelector(
  getHandCardsFeatureState,
  (state) => state.selectedCardId
);


