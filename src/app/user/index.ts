import * as fromRoot from '../state/app.state';
import * as fromPlayerShell from './player-shell/state/player.reducer';
import * as fromDealerShell from './dealer-shell/state/dealer.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

export interface UserModuleState {
  player: fromPlayerShell.PlayerState;
  dealer: fromDealerShell.DealerState;
}

export interface State extends fromRoot.State {
  userModule: UserModuleState;
}

export const userReducers: ActionReducerMap<UserModuleState, any> = {
  player: fromPlayerShell.playerReducer,
  dealer: fromDealerShell.dealerReducer,
};

export const selectUserModuleState =
  createFeatureSelector<UserModuleState>('users');

  // Player
export const selectPlayerShellState = createSelector(
  selectUserModuleState,
  (state: UserModuleState) => state.player
);
export const getPlayer = createSelector(
  selectPlayerShellState,
  (state: fromPlayerShell.PlayerState) => state.player
);

export const getPlayerError = createSelector(
  selectPlayerShellState,
  (state) => state.error
)


// DEALER
export const selectDealerShellState = createSelector(
  selectUserModuleState,
  (state: UserModuleState) => state.dealer
);

export const getDealer = createSelector(
  selectDealerShellState,
  (state: fromDealerShell.DealerState) => state.dealer
);
export const getDealerError = createSelector(
  selectDealerShellState,
  state => state.error
);
