import { Action } from '@ngrx/store';
import { Hand } from '../../../models/hand';
export enum dealerhandActionTypes {
  LOAD_HAND = '[Dealer Hand] Load Dealer Hand',
  LOAD_HAND_SUCCESS = '[Dealer Hand] Load Dealer Hand Success',
  LOAD_HAND_FAIL = '[Dealer Hand]Load Dealer Hand Fail',
  CREATE_DEALER_HAND = '[Dealer Hand] Create Dealer Hand',
  CREATE_DEALER_HAND_SUCCESS = '[Dealer Hand] Create  Dealer Hand Success',
  CREATE_DEALER_HAND_FAIL = '[Dealer Hand] Create Dealer Hand Fail',

  SET_HAND_ID_FAIL = '[Dealer Hand] Set Dealer Hand ID Fail',
  SET_GAME_ID = '[Dealer Hand] Set Game ID',
  CLEAR_GAME_ID = '[Dealer Hand] Clear Game ID',
  SET_GAME_ID_FAIL = '[Dealer Hand] Set Game ID Fail',
  SET_USER_ID = '[Dealer Hand] Set User ID',
  CLEAR_USER_ID = '[Dealer Hand] Clear User ID',
  SET_USER_ID_FAIL = '[Dealer Hand] Set User ID Fail',
  SET_HAND_ID = '[Dealer Hand] Set Dealer Hand ID',
  CLEAR_HAND_ID = '[Dealer Hand] Clear Dealer Hand ID',

  ADD_CARDS_TO_DEALER_HAND = '[Dealer Hand] Add Cards to Dealer Hand',
  ADD_CARDS_TO_DEALER_HAND_SUCCESS = '[Dealer Hand] Add Cards to Dealer Hand --- SUCCESS',
  ADD_CARDS_TO_DEALER_HAND_FAIL = '[Dealer Hand] Add Cards to Dealer Hand ---- FAIL',

  UPDATE_DEALER_HAND_STATUS = '[Dealer Hand] Update Dealer Hand Status',
  UPDATE_DEALER_HAND_STATUS_SUCCESS = '[Dealer Hand] Update Dealer Hand Status --- SUCCESS',
  UPDATE_DEALER_HAND_STATUS_FAIL = '[Dealer Hand] Update Dealer Hand Status ---- FAIL',
}


export class UpdateDealerHandStatus implements Action {
  readonly type = dealerhandActionTypes.UPDATE_DEALER_HAND_STATUS;
}

export class UpdateDealerHandStatusSuccess implements Action {
  readonly type = dealerhandActionTypes.UPDATE_DEALER_HAND_STATUS_SUCCESS;
}

export class UpdateDealerHandStatusFail implements Action {
  readonly type = dealerhandActionTypes.UPDATE_DEALER_HAND_STATUS_FAIL;
  constructor(public payload: string) {}
}


export class LoadHand implements Action {
  readonly type = dealerhandActionTypes.LOAD_HAND;

}


export class LoadHandSuccess implements Action {
  readonly type = dealerhandActionTypes.LOAD_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}

export class LoadHandFail implements Action {
  readonly type = dealerhandActionTypes.LOAD_HAND_FAIL;
  constructor(public payload: string){ }
}

export class CreateDealerHand implements Action {
  readonly type = dealerhandActionTypes.CREATE_DEALER_HAND;
}

export class CreateDealerHandSuccess implements Action {
  readonly type = dealerhandActionTypes.CREATE_DEALER_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}

export class CreateDealerHandFail implements Action {
  readonly type = dealerhandActionTypes.CREATE_DEALER_HAND_FAIL;
  constructor(public payload: string) {}
}

export class SetHandId implements Action {
  readonly type = dealerhandActionTypes.SET_HAND_ID;
  constructor(public payload: number) {}
}

export class ClearHandId implements Action {
  readonly type = dealerhandActionTypes.CLEAR_HAND_ID;
}

export class SetHandIDFail implements Action {
  readonly type = dealerhandActionTypes.SET_HAND_ID_FAIL;
  constructor(public payload: string) {}
}
export class SetGameID implements Action {
  readonly type = dealerhandActionTypes.SET_GAME_ID;
  constructor(public payload: number) { }
}

export class ClearGameID implements Action {
  readonly type = dealerhandActionTypes.CLEAR_GAME_ID;
}

export class SetGameIdFail implements Action {
  readonly type = dealerhandActionTypes.SET_GAME_ID_FAIL;
  constructor(public payload: string){}
}
export class SetUserId implements Action {
  readonly type = dealerhandActionTypes.SET_USER_ID;
  constructor(public payload: number) {  }
}
export class ClearUserId implements Action {
  readonly type = dealerhandActionTypes.CLEAR_USER_ID;
}
export class SetUserIDFail implements Action {
  readonly type = dealerhandActionTypes.SET_USER_ID_FAIL;
  constructor(public payload: string){ }
}


export class AddCardsToDealerHand implements Action {
  readonly type = dealerhandActionTypes.ADD_CARDS_TO_DEALER_HAND;

}
export class AddCardsToDealerHandSuccess implements Action {
  readonly type = dealerhandActionTypes.ADD_CARDS_TO_DEALER_HAND_SUCCESS;
  constructor(public payload: Hand) {}
}
export class AddCardsToDealerHandFail implements Action {
  readonly type = dealerhandActionTypes.ADD_CARDS_TO_DEALER_HAND_FAIL;
  constructor(public payload: string){ }
}
export type DealerHandActions =
  | LoadHand
  | LoadHandSuccess
  | LoadHandFail
  | CreateDealerHand
  | CreateDealerHandSuccess
  | CreateDealerHandFail
  | SetHandId
  | ClearHandId
  | SetHandIDFail
  | SetGameID
  | ClearGameID
  | SetGameIdFail
  | SetUserId
  | ClearUserId
  | SetUserIDFail
  | AddCardsToDealerHand
  | AddCardsToDealerHandSuccess
  | AddCardsToDealerHandFail
  | UpdateDealerHandStatus
  | UpdateDealerHandStatusSuccess
  | UpdateDealerHandStatusFail
  ;
