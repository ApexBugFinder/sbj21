import { Action } from '@ngrx/store';
import { Player } from '../../models/player';

export enum playerActionTypes {
  LOAD_PLAYER = '[Player] LOAD PLAYER',
  LOAD_PLAYER_SUCCESS = '[Player] Successful Player Load',
  LOAD_PLAYER_FAIL = '[Player] Failed to Load Player',
  CLEAR_PLAYER = '[Player] CLEAR PLAYER',
  SET_USERNAME = '[Player] Player Username to Fetch',
  CLEAR_USERNAME = '[Player] Clear Player Username',
  SET_PLAYER = '[Player] Set DealerShell Player'
}

export class LoadPlayer implements Action {
  readonly type = playerActionTypes.LOAD_PLAYER;
}

export class LoadPlayerSuccess implements Action {
  readonly type = playerActionTypes.LOAD_PLAYER_SUCCESS;
  constructor(public payload: Player) {}
}
export class LoadPlayerFail implements Action {
  readonly type = playerActionTypes.LOAD_PLAYER_FAIL;
  constructor(public payload: string) {}
}
export class ClearPlayer implements Action {
  readonly type = playerActionTypes.CLEAR_PLAYER;
}

export class SetUsername implements Action {
  readonly type = playerActionTypes.SET_USERNAME;
  constructor(public payload: string) {}
}

export class ClearUsername implements Action {
  readonly type = playerActionTypes.CLEAR_USERNAME;
}

export class SetDealerShellPlayer implements Action {
  readonly type = playerActionTypes.SET_PLAYER;
  constructor(public payload: Player) {}
}


export type DealerShellActions =
  | LoadPlayer
  | LoadPlayerSuccess
  | LoadPlayerFail
  | ClearPlayer
  | SetUsername
  | ClearUsername
  | SetDealerShellPlayer;
