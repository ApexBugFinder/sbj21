import { Hand } from "../models/hand";
import {  HandActions, handActionTypes } from "./hand.actions";

export interface HandState {
  handId: number,
  userId: number,
  gameId: number,
  error: string;
}

const initialState: HandState = {
  handId: 0,
  userId: 0,
  gameId: 0,
  error: ''
}

export function handReducer(state = initialState, action: HandActions): HandState {
  switch (action.type) {
    case handActionTypes.LOAD_HAND_SUCCESS:
      return {
        ...state,
        handId: action.payload.id,
        gameId: action.payload.game_id,
        userId: action.payload.user_id
      };
    case handActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case handActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      };

    case handActionTypes.SET_GAME_ID:
      return {
        ...state,
        gameId: action.payload
      };

    case handActionTypes.CLEAR_GAME_ID:
      return {
        ...state,
        gameId: initialState.gameId
      }
    case handActionTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.payload
      };
    case handActionTypes.CLEAR_USER_ID:
      return {
        ...state,
        userId: initialState.userId
      }

    case handActionTypes.LOAD_HAND_FAIL:
    case handActionTypes.SET_GAME_ID_FAIL:
    case handActionTypes.SET_HAND_ID_FAIL:
    case handActionTypes.SET_USER_ID_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
