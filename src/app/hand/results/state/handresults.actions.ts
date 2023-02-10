import { Action } from '@ngrx/store';
import { handstatusActionTypes } from '../../handstatus/state/handstatus.actions';

export enum handresultsActionTypes {
  SET_HAND_ID = '[HAND RESULTS] Set Hand ID',
  CLEAR_HAND_ID = '[HAND RESULTS] Clear Hand ID',
  HAND_ID_FAIL = '[HAND RESULTS] SET Hand ID Error',

  SET_USER_ID = '[HAND RESULTS] SET USER ID',
  CLEAR_USER_ID = '[HAND RESULTS] CLEAR USER ID',
  USER_ID_FAIL = '[HAND RESULTS] Set User ID Error',

  SET_PLAYER_LIMIT = '[HAND RESULTS] SET PLAYER LIMIT',
  CLEAR_PLAYER_LIMIT = '[HAND RESULTS] Clear Player Limit',
  PLAYER_LIMIT_FAIL = '[HAND RESULTS] Player Limit Error',

  SET_H_VALUE = '[HAND RESULTS] SET High Value',
  CLEAR_H_VALUE = '[HAND RESULTS] Clear High Value',
  H_VALUE_FAIL = '[HAND RESULTS] High Value Error',

  SET_L_VALUE = '[HAND RESULTS] Set Low Value',
  CLEAR_L_VALUE = '[HAND RESULTS] Clear Low Value',
  L_VALUE_FAIL = '[HAND RESULTS] Low Value Error',


}


// HAND ID
export class SetHandId implements Action {
  readonly type = handresultsActionTypes.SET_HAND_ID;
  constructor(public payload: number) { }
}

export class ClearHandId implements Action {
  readonly type = handresultsActionTypes.CLEAR_HAND_ID;

}

export class HandIdFail implements Action {
  readonly type = handresultsActionTypes.HAND_ID_FAIL;
  constructor(public payload: string) {}
}

// USERID
export class SetUserId implements Action {
  readonly type = handresultsActionTypes.SET_USER_ID;
  constructor(public payload: number){}
}


export class ClearUserId implements Action {
  readonly type = handresultsActionTypes.CLEAR_USER_ID;

}
export class UserIdFail implements Action {
  readonly type = handresultsActionTypes.USER_ID_FAIL;
  constructor(public payload: string){}
}

// PLAYER LIMIT
export class SetPlayerLimit implements Action {
  readonly type = handresultsActionTypes.SET_PLAYER_LIMIT;
  constructor(public payload: number){ }
}

export class ClearPlayerLimit implements Action {
  readonly type = handresultsActionTypes.CLEAR_PLAYER_LIMIT;

}

export class PlayerLimitFail implements Action {
  readonly type = handresultsActionTypes.PLAYER_LIMIT_FAIL;
  constructor(public payload: string ) {}
}

// HIGH VALUE
export class SetHighValue implements Action {
  readonly type = handresultsActionTypes.SET_H_VALUE;
  constructor (public payload: number){}
}

export class ClearHighValue implements Action {
  readonly type = handresultsActionTypes.CLEAR_H_VALUE;

}

export class HighValueFail implements Action {
  readonly type = handresultsActionTypes.H_VALUE_FAIL;
  constructor(public payload: string ){}
}

//  LOW VALUE
export class SetLowValue implements Action {
  readonly type = handresultsActionTypes.SET_L_VALUE;
  constructor(public payload: number){}
}

export class ClearLowValue implements Action {
  readonly type = handresultsActionTypes.CLEAR_L_VALUE;

}

export class LowValueFail implements Action {
  readonly type = handresultsActionTypes.L_VALUE_FAIL;
  constructor(public payload: string){}
}


export type HandResultsActions = SetHandId
  | ClearHandId
  | HandIdFail
  | SetPlayerLimit
  | ClearPlayerLimit
  | PlayerLimitFail
  | SetUserId
  | ClearUserId
  | UserIdFail
  | SetHighValue
  | ClearHighValue
  | HighValueFail
  | SetLowValue
  | ClearLowValue
  | LowValueFail
  ;


