import { retry } from "rxjs";
import { DeckCard, defaultDeckCard } from "../../models/deckcard";
import { DeckShellActions, deckshellActionTypes } from "./deckshell-actions";

export interface DeckShellState {
  id: number;
  created_at: Date;
  bkCard: DeckCard;

  displayCards: DeckCard[];
  error: string;
}

const initialState: DeckShellState = {
  id: 0,
  created_at: new Date(),
  bkCard: defaultDeckCard,
  displayCards: [],
  error: ''
}



export function deckShellReducer(
  state = initialState,
  action: DeckShellActions
): DeckShellState {
  switch (action.type) {
    case deckshellActionTypes.SET_DECK_INFO_ID:
      return {
        ...state,
        id: action.payload
      }
    case deckshellActionTypes.CLEAR_DECK_INFO_ID:
      return {
        ...state,
        id: initialState.id
      }
    case deckshellActionTypes.SET_DECK_INFO_CREATED_AT:
      return {
        ...state,
        created_at: action.payload
      }
    case deckshellActionTypes.CLEAR_DECK_INFO_CREATED_AT:
      return {
        ...state,
        created_at: initialState.created_at
      }
    case deckshellActionTypes.SET_BACK_CARD:
      return {
        ...state,
        bkCard: action.payload
      }
    case deckshellActionTypes.CLEAR_BACK_CARD:
      return {
        ...state,
        bkCard: initialState.bkCard
      }
    case deckshellActionTypes.SET_DISPLAY_CARDS:
      return {
        ...state,
        displayCards: action.payload
      }
    case deckshellActionTypes.CLEAR_DISPLAY_CARDS:
      return {
        ...state,
        displayCards: initialState.displayCards
      };

    case deckshellActionTypes.LOAD_DECK_SUCCESS:
      return {
        ...state,

      }
    case deckshellActionTypes.LOAD_DECK_FAIL:
    case deckshellActionTypes.SET_DECKSHELL_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case deckshellActionTypes.CLEAR_DECKSHELL_ERROR:
      return {
        ...state,
        error: initialState.error
      }
    default:
      return {
        ...state
      }
  }
}

