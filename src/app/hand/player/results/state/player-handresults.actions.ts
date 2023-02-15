import { Action } from '@ngrx/store';


export enum playerhandresultsActionTypes {
  SET_HAND_ID = '[PLAYER HAND RESULTS] Set Hand ID',
  CLEAR_HAND_ID = '[PLAYER HAND RESULTS] Clear Hand ID',
  HAND_ID_FAIL = '[PLAYER HAND RESULTS] SET Hand ID Error',

  SET_USER_ID = '[PLAYER HAND RESULTS] SET USER ID',
  CLEAR_USER_ID = '[PLAYER HAND RESULTS] CLEAR USER ID',
  USER_ID_FAIL = '[PLAYER HAND RESULTS] Set User ID Error',

  SET_PLAYER_LIMIT = '[PLAYER HAND RESULTS] SET PLAYER LIMIT',
  CLEAR_PLAYER_LIMIT = '[PLAYER HAND RESULTS] Clear Player Limit',
  PLAYER_LIMIT_FAIL = '[PLAYER HAND RESULTS] Player Limit Error',

  SET_H_VALUE = '[PLAYER HAND RESULTS] SET High Value',
  CLEAR_H_VALUE = '[PLAYER HAND RESULTS] Clear High Value',
  H_VALUE_FAIL = '[PLAYER HAND RESULTS] High Value Error',

  SET_L_VALUE = '[PLAYER HAND RESULTS] Set Low Value',
  CLEAR_L_VALUE = '[PLAYER HAND RESULTS] Clear Low Value',
  L_VALUE_FAIL = '[PLAYER HAND RESULTS] Low Value Error',


}


// HAND ID
export class SetHandId implements Action {
  readonly type = playerhandresultsActionTypes.SET_HAND_ID;
  constructor(public payload: number) { }
}

export class ClearHandId implements Action {
  readonly type = playerhandresultsActionTypes.CLEAR_HAND_ID;

}

export class HandIdFail implements Action {
  readonly type = playerhandresultsActionTypes.HAND_ID_FAIL;
  constructor(public payload: string) {}
}

// USERID
export class SetUserId implements Action {
  readonly type = playerhandresultsActionTypes.SET_USER_ID;
  constructor(public payload: number){}
}


export class ClearUserId implements Action {
  readonly type = playerhandresultsActionTypes.CLEAR_USER_ID;

}
export class UserIdFail implements Action {
  readonly type = playerhandresultsActionTypes.USER_ID_FAIL;
  constructor(public payload: string){}
}

// PLAYER LIMIT
export class SetPlayerLimit implements Action {
  readonly type = playerhandresultsActionTypes.SET_PLAYER_LIMIT;
  constructor(public payload: number){ }
}

export class ClearPlayerLimit implements Action {
  readonly type = playerhandresultsActionTypes.CLEAR_PLAYER_LIMIT;

}

export class PlayerLimitFail implements Action {
  readonly type = playerhandresultsActionTypes.PLAYER_LIMIT_FAIL;
  constructor(public payload: string ) {}
}

// HIGH VALUE
export class SetHighValue implements Action {
  readonly type = playerhandresultsActionTypes.SET_H_VALUE;
  constructor (public payload: number){}
}

export class ClearHighValue implements Action {
  readonly type = playerhandresultsActionTypes.CLEAR_H_VALUE;

}

export class HighValueFail implements Action {
  readonly type = playerhandresultsActionTypes.H_VALUE_FAIL;
  constructor(public payload: string ){}
}

//  LOW VALUE
export class SetLowValue implements Action {
  readonly type = playerhandresultsActionTypes.SET_L_VALUE;
  constructor(public payload: number){}
}

export class ClearLowValue implements Action {
  readonly type = playerhandresultsActionTypes.CLEAR_L_VALUE;

}

export class LowValueFail implements Action {
  readonly type = playerhandresultsActionTypes.L_VALUE_FAIL;
  constructor(public payload: string){}
}


export type PlayerHandResultsActions = SetHandId
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


