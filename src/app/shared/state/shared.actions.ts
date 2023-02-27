import { Action } from '@ngrx/store';
import { Game } from '../../models/game';
import { Player } from 'src/app/user/models/player';

export enum sharedActionTypes {
  CREATE_GAME = '[Shared] Create Game',
  CREATE_GAME_SUCCESS = '[Shared] Create Game Success',
  CREATE_GAME_FAIL = '[Shared] Create Game Fail',
  START_GAME = '[Shared] Start Game',
  END_GAME = '[Shared] End Game',
  SET_USER_TURN = '[Shared] Set User Turn',
  SET_GUEST_PLAYER = '[Shared] Set guest Player',
  SET_DEALER = '[Shared] Set Dealer',
  SET_GAME_ID = '[Shared] Set GameID',
  CLEAR_GAME_ID = '[Shared] Clear GameID',
  CHANGE_GAME_STATUS_TO_ACTIVE = '[Shared] Set game Status to ACTIVE',
  CHANGE_GAME_STATUS_TO_ACTIVE_SUCCESS = '[Shared] Set game Status to ACTIVE -- Success',
  CHANGE_GAME_STATUS_TO_ACTIVE_FAIL = '[Shared] Set game Status to ACTIVE -- FAIL',
  CHANGE_GAME_STATUS_TO_COMPLETE = '[Shared] Set game Status to COMPLETE',
  CHANGE_GAME_STATUS_TO_COMPLETE_SUCCESS = '[Shared] Set game Status to COMPLETE -- Success',
  CHANGE_GAME_STATUS_TO_COMPLETE_FAIL = '[Shared] Set game Status to COMPLETE -- FAIL',

}

export class CreateGame implements Action {
  readonly type = sharedActionTypes.CREATE_GAME;

}

export class CreateGameSuccess implements Action {
  readonly type = sharedActionTypes.CREATE_GAME_SUCCESS;
  constructor(public payload: Game){}
}

export class CreateGameFail implements Action {
  readonly type = sharedActionTypes.CREATE_GAME_FAIL;
  constructor(public payload: string){}
}
export class StartGame implements Action {
  readonly type = sharedActionTypes.START_GAME;
  constructor(public payload:string) {}
}


export class EndGame implements Action {
  readonly type = sharedActionTypes.END_GAME;
  constructor(public payload:Date) {}
}

export class SetUserTurn implements Action {
  readonly type = sharedActionTypes.SET_USER_TURN;
  constructor(public payload: Player) {}
}

export class SetGuestPlayer implements Action {
  readonly type = sharedActionTypes.SET_GUEST_PLAYER;
  constructor(public payload: Player) {}
}

export class SetDealer implements Action {
  readonly type = sharedActionTypes.SET_DEALER;
  constructor(public payload: Player) {}
}

export class SetGameID implements Action {
  readonly type = sharedActionTypes.SET_GAME_ID;
  constructor(public payload: number) { }

}
export class ClearGameID implements Action {
  readonly type = sharedActionTypes.CLEAR_GAME_ID;
}


// CHANGE GAME STATUS
export class ChangeGameStatus2Active implements Action {
  readonly type = sharedActionTypes.CHANGE_GAME_STATUS_TO_ACTIVE;
}
export class ChangeGameStatus2ActiveSuccess implements Action {
  readonly type = sharedActionTypes.CHANGE_GAME_STATUS_TO_ACTIVE_SUCCESS;
  constructor(public payload: Game) { }
}


export class ChangeGameStatus2ActiveFail implements Action {
  readonly type = sharedActionTypes.CHANGE_GAME_STATUS_TO_ACTIVE_FAIL;
  constructor(public payload: string) {}
}

export class ChangeGameStatus2Complete implements Action {
  readonly type = sharedActionTypes.CHANGE_GAME_STATUS_TO_COMPLETE;
}
export class ChangeGameStatus2CompleteSuccess implements Action {
  readonly type = sharedActionTypes.CHANGE_GAME_STATUS_TO_COMPLETE_SUCCESS;
  constructor(public payload: Game) {}
}

export class ChangeGameStatus2CompleteFail implements Action {
  readonly type = sharedActionTypes.CHANGE_GAME_STATUS_TO_COMPLETE_FAIL;
  constructor(public payload: string) {}
}

export type SharedActions = CreateGame
  | CreateGameSuccess
  | CreateGameFail
  | StartGame
  | EndGame
  | SetUserTurn
  | SetGuestPlayer
  | SetDealer
  | SetGameID
  | ClearGameID
  | ChangeGameStatus2Active
  | ChangeGameStatus2ActiveSuccess
  | ChangeGameStatus2ActiveFail
  | ChangeGameStatus2Complete
  | ChangeGameStatus2CompleteSuccess
  | ChangeGameStatus2CompleteFail
  ;
