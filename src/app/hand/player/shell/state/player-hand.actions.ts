import { Action } from '@ngrx/store';
import { Hand } from '../../../models/hand';
export enum playerhandActionTypes {
  LOAD_HAND = '[PLAYER HAND]Load Hand',
  LOAD_HAND_SUCCESS = '[PLAYER HAND]Load Hand Success',
  LOAD_HAND_FAIL = '[PLAYER HAND] Load Hand Fail',
  CREATE_PLAYER_HAND = '[PLAYER HAND]Create Player Hand',
  CREATE_PLAYER_HAND_SUCCESS = '[PLAYER HAND]Create Player Hand Success',
  CREATE_PLAYER_HAND_FAIL = '[PLAYER HAND]Create Player Hand Fail',

  SET_HAND_ID_FAIL = '[PLAYER HAND]Set Hand ID Fail',
  SET_GAME_ID = '[PLAYER HAND]Set Game ID',
  CLEAR_GAME_ID = '[PLAYER HAND]Clear Game ID',
  SET_GAME_ID_FAIL = '[PLAYER HAND]Set Game ID Fail',
  SET_USER_ID = '[PLAYER HAND]Set User ID',
  CLEAR_USER_ID = '[PLAYER HAND]Clear User ID',
  SET_USER_ID_FAIL = '[PLAYER HAND]Set User ID Fail',
  SET_HAND_ID = '[PLAYER HAND]Set Hand ID',
  CLEAR_HAND_ID = '[PLAYER HAND]Clear Hand ID',

  ADD_CARDS_TO_PLAYER_HAND = '[Player Hand] Add Cards to Player Hand',
  ADD_CARDS_TO_PLAYER_HAND_SUCCESS = '[Player Hand] Add Cards to Player Hand --- SUCCESS',
  ADD_CARDS_TO_PLAYER_HAND_FAIL = '[Player Hand] Add Cards to Player Hand ---- FAIL',

  UPDATE_PLAYER_HAND_STATUS = '[Player Hand] Update Player Hand Status',
  UPDATE_PLAYER_HAND_STATUS_SUCCESS = '[Player Hand] Update Player Hand Status --- SUCCESS',
  UPDATE_PLAYER_HAND_STATUS_FAIL = '[Player Hand] Update Player Hand Status ---- FAIL',
}

export class UpdatePlayerHandStatus implements Action {
  readonly type = playerhandActionTypes.UPDATE_PLAYER_HAND_STATUS;
}

export class UpdatePlayerHandStatusSuccess implements Action {
  readonly type = playerhandActionTypes.UPDATE_PLAYER_HAND_STATUS_SUCCESS;

}

export class UpdatePlayerHandStatusFail implements Action {
  readonly type = playerhandActionTypes.UPDATE_PLAYER_HAND_STATUS_FAIL;
  constructor(public payload: string){}
}

export class LoadHand implements Action {
  readonly type = playerhandActionTypes.LOAD_HAND;

}


export class LoadHandSuccess implements Action {
  readonly type = playerhandActionTypes.LOAD_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}

export class LoadHandFail implements Action {
  readonly type = playerhandActionTypes.LOAD_HAND_FAIL;
  constructor(public payload: string){ }
}

export class CreatePlayerHand implements Action {
  readonly type = playerhandActionTypes.CREATE_PLAYER_HAND;
}

export class CreatePlayerHandSuccess implements Action {
  readonly type = playerhandActionTypes.CREATE_PLAYER_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}

export class CreatePlayerHandFail implements Action {
  readonly type = playerhandActionTypes.CREATE_PLAYER_HAND_FAIL;
  constructor(public payload: string) {}
}

export class SetHandId implements Action {
  readonly type = playerhandActionTypes.SET_HAND_ID;
  constructor(public payload: number) {}
}

export class ClearHandId implements Action {
  readonly type = playerhandActionTypes.CLEAR_HAND_ID;
}

export class SetHandIDFail implements Action {
  readonly type = playerhandActionTypes.SET_HAND_ID_FAIL;
  constructor(public payload: string) {}
}
export class SetGameID implements Action {
  readonly type = playerhandActionTypes.SET_GAME_ID;
  constructor(public payload: number) { }
}

export class ClearGameID implements Action {
  readonly type = playerhandActionTypes.CLEAR_GAME_ID;
}

export class SetGameIdFail implements Action {
  readonly type = playerhandActionTypes.SET_GAME_ID_FAIL;
  constructor(public payload: string){}
}
export class SetUserId implements Action {
  readonly type = playerhandActionTypes.SET_USER_ID;
  constructor(public payload: number) {  }
}
export class ClearUserId implements Action {
  readonly type = playerhandActionTypes.CLEAR_USER_ID;
}
export class SetUserIDFail implements Action {
  readonly type = playerhandActionTypes.SET_USER_ID_FAIL;
  constructor(public payload: string){ }
}

export class AddCardsToPlayerHand implements Action {
  readonly type = playerhandActionTypes.ADD_CARDS_TO_PLAYER_HAND;
}
export class AddCardsToPlayerHandSuccess implements Action {
  readonly type = playerhandActionTypes.ADD_CARDS_TO_PLAYER_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}
export class AddCardsToPlayerHandFail implements Action {
  readonly type = playerhandActionTypes.ADD_CARDS_TO_PLAYER_HAND_FAIL;
  constructor(public payload: string) {}
}

export type PlayerHandActions =
  | LoadHand
  | LoadHandSuccess
  | LoadHandFail
  | CreatePlayerHand
  | CreatePlayerHandSuccess
  | CreatePlayerHandFail
  | SetHandId
  | ClearHandId
  | SetHandIDFail
  | SetGameID
  | ClearGameID
  | SetGameIdFail
  | SetUserId
  | ClearUserId
  | SetUserIDFail
  | AddCardsToPlayerHand
  | AddCardsToPlayerHandSuccess
  | AddCardsToPlayerHandFail
  | UpdatePlayerHandStatus
  | UpdatePlayerHandStatusSuccess
  | UpdatePlayerHandStatusFail
  ;
