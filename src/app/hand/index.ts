import * as fromRoot from '../state/app.state';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  select,
} from '@ngrx/store';
import * as fromDealerHand from './dealer/shell/state/dealer-hand.reducer';
import * as fromDealerHandStatus from './dealer/handstatus/state/dealer-handstatus.reducer';
import * as fromDealerHandResults from './dealer/results/state/dealer-handresults.reducer';
import * as fromDealerHandCards from './dealer/cards/state/dealer-handcards.reducer';

import * as fromPlayerHand from './player/shell/state/player-hand.reducer';
import * as fromPlayerHandCards from './player/cards/state/player-handcards.reducer';
import * as fromPlayerHandStatus from './player/handstatus/state/player-handstatus.reducer';
import * as fromPlayerHandResults from './player/results/state/player-handresults.reducer';
export interface HandModuleState {
  dealerhand: fromDealerHand.DealerHandState;
  dealerhandresults: fromDealerHandResults.DealerHandResultsState;
  dealerhandcards: fromDealerHandCards.DealerHandDeckCardsState;
  dealerhandstatus: fromDealerHandStatus.DealerHandStatusState;
  playerhand: fromPlayerHand.PlayerHandState;
  playerhandcards: fromPlayerHandCards.PlayerHandDeckCardsState;
  playerhandstatus: fromPlayerHandStatus.PlayerHandStatusState;
  playerhandresults: fromPlayerHandResults.PlayerHandResultsState;
}

export interface State extends fromRoot.State {
  handModule: HandModuleState;
}

export const handReducers: ActionReducerMap<HandModuleState, any> = {
  dealerhand: fromDealerHand.handReducer,
  dealerhandstatus: fromDealerHandStatus.dealerhandstatusReducer,
  dealerhandresults: fromDealerHandResults.handResultsReducer,
  dealerhandcards: fromDealerHandCards.reducer,
  playerhand: fromPlayerHand.handReducer,
  playerhandcards: fromPlayerHandCards.reducer,
  playerhandstatus: fromPlayerHandStatus.playerhandstatusReducer,
  playerhandresults: fromPlayerHandResults.playerhandResultsReducer,
};

export const selectHandModuleState =
  createFeatureSelector<HandModuleState>('hands');

// ===========
//  HAND * DEALER
export const selectDealerHandState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.dealerhand
);
export const getDealerHandId = createSelector(
  selectDealerHandState,
  (state: fromDealerHand.DealerHandState) => state.handId
);
export const getDealerGameId = createSelector(
  selectDealerHandState,
  (state: fromDealerHand.DealerHandState) => state.gameId
);
export const getDealerUserId = createSelector(
  selectDealerHandState,
  (state: fromDealerHand.DealerHandState) => state.userId
);
export const getDealerError = createSelector(
  selectDealerHandState,
  (state: fromDealerHand.DealerHandState) => state.error
);

// ===========
//  HAND * PLAYER

export const selectPlayerHandState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.playerhand
);
export const getPlayerHandId = createSelector(
  selectPlayerHandState,
  (state: fromPlayerHand.PlayerHandState) => state.handId
);
export const getPlayerGameId = createSelector(
  selectPlayerHandState,
  (state: fromPlayerHand.PlayerHandState) => state.gameId
);
export const getPlayerUserId = createSelector(
  selectPlayerHandState,
  (state: fromPlayerHand.PlayerHandState) => state.userId
);
export const getPlayerError = createSelector(
  selectPlayerHandState,
  (state: fromPlayerHand.PlayerHandState) => state.error
);
//  ----------============
// HandResults - DEaler

export const selectDealerHandResultsState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.dealerhandresults
);
export const getDealerHandResults = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => {
    return {
      handId: state.handId,
      h_value: state.h_value,
      l_value: state.l_value,
      player_limit: state.player_limit,
      user_id: state.user_id,
    };
  }
);
export const getDealerHand_h_value = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => state.h_value
);
export const getDealerHand_l_value = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => state.l_value
);

export const getDealerHand_handId = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => state.handId
);
export const getDealerHand_player_lim = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => state.player_limit
);
export const getDealerHand_user_id = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => state.user_id
);
export const getDealerHandResults_Error = createSelector(
  selectDealerHandResultsState,
  (state: fromDealerHandResults.DealerHandResultsState) => state.error
);

//  ----------============
// RESULTS - Player
export const selectPlayerHandResultsState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.playerhandresults
);

export const getPlayerHandResults = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => {
    return {
      handId: state.handId,
      h_value: state.h_value,
      l_value: state.l_value,
      player_limit: state.player_limit,
      user_id: state.user_id,
    };
  }
);
export const getPlayerHand_h_value = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => state.h_value
);
export const getPlayerHand_l_value = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => state.l_value
);

export const getPlayerHand_handId = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => state.handId
);
export const getPlayerHand_player_lim = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => state.player_limit
);
export const getPlayerHand_user_id = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => state.user_id
);
export const getPlayerHandResults_Error = createSelector(
  selectPlayerHandResultsState,
  (state: fromPlayerHandResults.PlayerHandResultsState) => state.error
);

// +======================
// STATUS - DEALER
export const selectDealerHandStatusState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.dealerhandstatus
);

export const getDealerHandStatus = createSelector(
  selectDealerHandStatusState,
  (state: fromDealerHandStatus.DealerHandStatusState) => state.status
);
export const getDealerHandStatusId = createSelector(
  selectDealerHandStatusState,
  (state: fromDealerHandStatus.DealerHandStatusState) => state.status
);
export const getDealerHandStatusUsername = createSelector(
  selectDealerHandStatusState,
  (state: fromDealerHandStatus.DealerHandStatusState) => state.username
);

// +======================
// STATUS - PLAYER
export const selectPlayerHandStatusState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.playerhandstatus
);
export const getPlayerHandStatus = createSelector(
  selectPlayerHandStatusState,
  (state: fromPlayerHandStatus.PlayerHandStatusState) => state.status
);

export const getPlayerHandStatusUsername = createSelector(
  selectPlayerHandStatusState,
  (state: fromPlayerHandStatus.PlayerHandStatusState) => state.username
);

// ================
// CARDS - DEALER
export const selectDealerHandCardsState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.dealerhandcards
);

export const getDealerHandCards = createSelector(
  selectDealerHandCardsState,
  (state: fromDealerHandCards.DealerHandDeckCardsState) => {
    return Object.values(state.entities);
  }
);

export const getDealerHandCardsCount = createSelector(
  selectDealerHandCardsState,
  (state: fromDealerHandCards.DealerHandDeckCardsState) => {
    return Object.values(state.entities).length;
  }
);

// ================
// CARDS - PLAYER
export const selectPlayerHandCardsState = createSelector(
  selectHandModuleState,
  (state: HandModuleState) => state.playerhandcards
);
export const getPlayerHandCards = createSelector(
  selectPlayerHandCardsState,
  (state: fromPlayerHandCards.PlayerHandDeckCardsState) => {
    return Object.values(state.entities);
  }
);

export const getPlayerHandCardsCount = createSelector(
  selectPlayerHandCardsState,
  (state: fromPlayerHandCards.PlayerHandDeckCardsState) => {
    return Object.values(state.entities).length;
  }
);
