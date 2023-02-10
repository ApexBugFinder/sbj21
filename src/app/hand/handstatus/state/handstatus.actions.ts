import { Action } from '@ngrx/store';
import { Hand } from '../../models/hand';

export enum handstatusActionTypes {
  SET_HAND_ID = '[HAND STATUS] SET Hand ID',
  CLEAR_HAND_ID = '[HAND STATUS] Clear Hand ID',
  SET_HAND_ID_FAIL = '[HAND STATUS] SET/CLEAR HAND ID FAIL',

  SET_HAND_STATUS = '[HAND STATUS] SET Hand Status',
  CLEAR_HAND_STATUS = '[HAND STATUS] CLEAR Hand Status',
  SET_HAND_STATUS_FAIL = '[HAND STATUS] SET/CLEAR HAND STATUS FAIL',
  SET_USERNAME = '[HAND STATUS] Set Username',
  CLEAR_USERNAME = '[HAND STATUS] CLear Username',
  SET_HAND_STATUS_USERNAME_FAIL = '[HAND STATUS] SET/CLEAR HAND STATUS Username FAIL',
}


export class SetHandId implements Action {
  readonly type = handstatusActionTypes.SET_HAND_ID;
  constructor(public payload: number) { }
}


export class ClearHandId implements Action {
  readonly type = handstatusActionTypes.CLEAR_HAND_ID;

}

export class SetHandIdError implements Action {
  readonly type = handstatusActionTypes.SET_HAND_ID_FAIL;
  constructor(public payload: string) {}
}

export class SetHandStatus implements Action {
  readonly type = handstatusActionTypes.SET_HAND_STATUS;
  constructor( public payload: string) {}
}

export class ClearHandStatus implements Action {
  readonly type = handstatusActionTypes.CLEAR_HAND_STATUS;
}

export class SetHandStatusError implements Action {
  readonly type = handstatusActionTypes.SET_HAND_STATUS_FAIL;
  constructor(public payload: string ) {}
}

export class SetHandStatusUsername implements Action {
  readonly type = handstatusActionTypes.SET_USERNAME;
  constructor(public payload: string) {  }
}

export class ClearHandStatusUsername implements Action {
  readonly type = handstatusActionTypes.CLEAR_USERNAME;

}
export class SetHandStatusUsernameError implements Action {
  readonly type = handstatusActionTypes.SET_HAND_STATUS_USERNAME_FAIL;
  constructor(public payload: string) {}
}

export type HandStatusActions = SetHandId
  | ClearHandId
  | SetHandIdError
  | SetHandStatus
  | ClearHandStatus
  | SetHandStatusError
  | SetHandStatusUsername
  | ClearHandStatusUsername
  | SetHandStatusUsernameError
  ;

