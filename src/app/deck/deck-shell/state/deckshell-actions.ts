import { Action } from "@ngrx/store";
import { DeckCard } from "../../models/deckcard";



export enum deckshellActionTypes {
  SET_DECK_INFO_ID = '[DECK SHELL] Set Deck details: deck ID',
  CLEAR_DECK_INFO_ID = '[DECK SHELL] Clear Deck details: deckID',

  SET_DECK_INFO_CREATED_AT = '[DECK SHELL] Set Deck details: deck.created_at',
  CLEAR_DECK_INFO_CREATED_AT = '[DECK SHELL] Clear Deck details: deck.created_at',

  SET_BACK_CARD = '[DECK SHELL] Set Deck Back Card',
  CLEAR_BACK_CARD = '[DECK SHELL] Clear Deck Back Card',

  SET_DISPLAY_CARDS = '[DECK SHELL] Set DeckShell Display Cards',
  CLEAR_DISPLAY_CARDS = '[DECK SHELL] Clear DeckShell Display Cards',



  SET_DECKSHELL_ERROR = '[DECK SHELL] Set DeckShell Error',
  CLEAR_DECKSHELL_ERROR = '[DECK SHELL] Clear DeckShell Error',
  LOAD_DECK = '[DECK SHELL] CREATE and LOAD NEW GAME DECK',
  LOAD_DECK_SUCCESS = '[DECK SHELL] CREATE and LOAD NEW GAME DECK - SUCCESS',
  LOAD_DECK_FAIL = '[DECK SHELL] CREATE and LOAD NEW GAME DECK - FAIL',
}


// **********
// ID
export class SetDeckID implements Action {
  readonly type = deckshellActionTypes.SET_DECK_INFO_ID;
  constructor(public payload: number) {}
}

export class ClearDeckID implements Action {
  readonly type = deckshellActionTypes.CLEAR_DECK_INFO_ID;

}

// **********
// CREATED AT
export class SetDeckInfoCreatedAt implements Action {
  readonly type = deckshellActionTypes.SET_DECK_INFO_CREATED_AT;
  constructor(public payload: Date) {}
}

export class ClearDeckInfoCreatedAt implements Action {
  readonly type = deckshellActionTypes.CLEAR_DECK_INFO_CREATED_AT;
}

// **********
// BACK CARD
export class SetDeckBackCard implements Action {
  readonly type = deckshellActionTypes.SET_BACK_CARD;
  constructor( public payload: DeckCard){}
}

export class ClearDeckBackCard implements Action {
  readonly type = deckshellActionTypes.CLEAR_BACK_CARD;
}

// **********
// DISPLAY CARD 1
export class SetDisplayCards implements Action {
  readonly type = deckshellActionTypes.SET_DISPLAY_CARDS;
  constructor(public payload: DeckCard[]) {}
}
export class ClearDisplayCards implements Action {
  readonly type = deckshellActionTypes.CLEAR_DISPLAY_CARDS;
}



// *****
// ERROR
export class SetDeckShellError implements Action {
  readonly type = deckshellActionTypes.SET_DECKSHELL_ERROR;
  constructor(public payload: string) {}
}
export class ClearDeckShellError implements Action {
  readonly type = deckshellActionTypes.CLEAR_DECKSHELL_ERROR;
}

// *******
// LOAD ENTITY DECK
export class LoadDeck implements Action {
  readonly type = deckshellActionTypes.LOAD_DECK;
  constructor(public payload: number){}
}

export class LoadDeckSuccess implements Action {
  readonly type = deckshellActionTypes.LOAD_DECK_SUCCESS;
  constructor(public payload: DeckCard[]) {}
}

export class LoadDeckFail implements Action {
  readonly type = deckshellActionTypes.LOAD_DECK_FAIL;
  constructor (public payload: string) {}
}


export type DeckShellActions = SetDeckID
  | ClearDeckID
  | SetDeckInfoCreatedAt
  | ClearDeckInfoCreatedAt
  | SetDeckBackCard
  | ClearDeckBackCard
  | SetDisplayCards
  | ClearDisplayCards
  | SetDeckShellError
  | ClearDeckShellError
  | LoadDeck
  | LoadDeckSuccess
  | LoadDeckFail
  ;

