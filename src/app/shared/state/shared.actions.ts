import { Action } from '@ngrx/store';
import { Game } from '../../models/game';
import { Player } from 'src/app/user/models/player';

export enum sharedActionTypes {
  CREATE_GAME = '[Shared] Create Game',
  CREATE_GAME_SUCCESS = '[Shared] Create Game Success',
  CREATE_GAME_FAIL = '[Shared] Create Game Fail',
  START_GAME = '[Shared] Start Game',
  END_GAME = '[Shared] End Game',
  SET_USER_TURN = '[Shared] Set Username Turn',
  SET_GUEST_PLAYER = '[Shared] Set guest Player',
  SET_DEALER = '[Shared] Set Dealer'
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
  constructor(public payload: string) {}
}

export class SetGuestPlayer implements Action {
  readonly type = sharedActionTypes.SET_GUEST_PLAYER;
  constructor(public payload: Player) {}
}

export class SetDealer implements Action {
  readonly type = sharedActionTypes.SET_DEALER;
  constructor(public payload: Player) {}
}
export type SharedActions = CreateGame
  | CreateGameSuccess
  | CreateGameFail
  | StartGame
  | EndGame
  | SetUserTurn
  | SetGuestPlayer
  | SetDealer
  ;
