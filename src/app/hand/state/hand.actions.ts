import { Action } from '@ngrx/store';
import { Hand } from '../models/hand';
export enum handActionTypes {
  LOAD_HAND = '[Hand] Load Hand',
  LOAD_HAND_SUCCESS = '[Hand] Load Hand Success',
  LOAD_HAND_FAIL = '[Hand]Load Hand Fail',

  SET_HAND_ID_FAIL = '[Hand] Set Hand ID Fail',
  SET_GAME_ID = '[Hand] Set Game ID',
  CLEAR_GAME_ID = '[Hand] Clear Game ID',
  SET_GAME_ID_FAIL = '[Hand] Set Game ID Fail',
  SET_USER_ID = '[Hand] Set User ID',
  CLEAR_USER_ID = '[Hand] Clear User ID',
  SET_USER_ID_FAIL = '[Hand] Set User ID Fail',
  SET_HAND_ID = '[Hand] Set Hand ID',
  CLEAR_HAND_ID = '[Hand] Clear Hand ID',
}


export class LoadHand implements Action {
  readonly type = handActionTypes.LOAD_HAND;

}


export class LoadHandSuccess implements Action {
  readonly type = handActionTypes.LOAD_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}

export class LoadHandFail implements Action {
  readonly type = handActionTypes.LOAD_HAND_FAIL;
  constructor(public payload: string){ }
}

export class SetHandId implements Action {
  readonly type = handActionTypes.SET_HAND_ID;
  constructor(public payload: number) {}
}

export class ClearHandId implements Action {
  readonly type = handActionTypes.CLEAR_HAND_ID;
}

export class SetHandIDFail implements Action {
  readonly type = handActionTypes.SET_HAND_ID_FAIL;
  constructor(public payload: string) {}
}
export class SetGameID implements Action {
  readonly type = handActionTypes.SET_GAME_ID;
  constructor(public payload: number) { }
}

export class ClearGameID implements Action {
  readonly type = handActionTypes.CLEAR_GAME_ID;
}

export class SetGameIdFail implements Action {
  readonly type = handActionTypes.SET_GAME_ID_FAIL;
  constructor(public payload: string){}
}
export class SetUserId implements Action {
  readonly type = handActionTypes.SET_USER_ID;
  constructor(public payload: number) {  }
}
export class ClearUserId implements Action {
  readonly type = handActionTypes.CLEAR_USER_ID;
}
export class SetUserIDFail implements Action {
  readonly type = handActionTypes.SET_USER_ID_FAIL;
  constructor(public payload: string){ }
}
export type HandActions = LoadHand
  | LoadHandSuccess
  | LoadHandFail
  | SetHandId
  | ClearUserId
  | SetHandIDFail
  | SetGameID
  | ClearGameID
  |SetGameIdFail
  | SetUserId
  | ClearUserId
  | SetUserIDFail
  ;
