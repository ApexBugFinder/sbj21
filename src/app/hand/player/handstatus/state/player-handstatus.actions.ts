import { Action } from '@ngrx/store';


export enum playerhandstatusActionTypes {
  SET_HAND_ID = '[PLAYER HAND STATUS] SET Hand ID',
  CLEAR_HAND_ID = '[PLAYER HAND STATUS] Clear Hand ID',
  SET_HAND_ID_FAIL = '[PLAYER HAND STATUS] SET/CLEAR HAND ID FAIL',

  SET_HAND_STATUS = '[PLAYER HAND STATUS] SET Hand Status',
  CLEAR_HAND_STATUS = '[PLAYER HAND STATUS] CLEAR Hand Status',
  SET_HAND_STATUS_FAIL = '[PLAYER HAND STATUS] SET/CLEAR HAND STATUS FAIL',
  SET_USERNAME = '[PLAYER HAND STATUS] Set Username',
  CLEAR_USERNAME = '[PLAYER HAND STATUS] CLear Username',
  SET_HAND_STATUS_USERNAME_FAIL = '[PLAYER HAND STATUS] SET/CLEAR HAND STATUS Username FAIL',
}


export class SetHandId implements Action {
  readonly type = playerhandstatusActionTypes.SET_HAND_ID;
  constructor(public payload: number) { }
}


export class ClearHandId implements Action {
  readonly type = playerhandstatusActionTypes.CLEAR_HAND_ID;

}

export class SetHandIdError implements Action {
  readonly type = playerhandstatusActionTypes.SET_HAND_ID_FAIL;
  constructor(public payload: string) {}
}

export class SetHandStatus implements Action {
  readonly type = playerhandstatusActionTypes.SET_HAND_STATUS;
  constructor( public payload: string) {}
}

export class ClearHandStatus implements Action {
  readonly type = playerhandstatusActionTypes.CLEAR_HAND_STATUS;
}

export class SetHandStatusError implements Action {
  readonly type = playerhandstatusActionTypes.SET_HAND_STATUS_FAIL;
  constructor(public payload: string ) {}
}

export class SetHandStatusUsername implements Action {
  readonly type = playerhandstatusActionTypes.SET_USERNAME;
  constructor(public payload: string) {  }
}

export class ClearHandStatusUsername implements Action {
  readonly type = playerhandstatusActionTypes.CLEAR_USERNAME;

}
export class SetHandStatusUsernameError implements Action {
  readonly type = playerhandstatusActionTypes.SET_HAND_STATUS_USERNAME_FAIL;
  constructor(public payload: string) {}
}

export type PlayerHandStatusActions = SetHandId
  | ClearHandId
  | SetHandIdError
  | SetHandStatus
  | ClearHandStatus
  | SetHandStatusError
  | SetHandStatusUsername
  | ClearHandStatusUsername
  | SetHandStatusUsernameError
  ;

