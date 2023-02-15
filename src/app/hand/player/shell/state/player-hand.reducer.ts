import { Hand } from '../../../models/hand';
import {
  PlayerHandActions,
  playerhandActionTypes,
} from './player-hand.actions';

export interface PlayerHandState {
  handId: number;
  userId: number;
  gameId: number;
  error: string;
}

const initialState: PlayerHandState = {
  handId: 0,
  userId: 0,
  gameId: 0,
  error: '',
};

export function handReducer(
  state = initialState,
  action: PlayerHandActions
): PlayerHandState {
  switch (action.type) {
    case playerhandActionTypes.CREATE_PLAYER_HAND_SUCCESS:
    case playerhandActionTypes.LOAD_HAND_SUCCESS:
      return {
        ...state,
        handId: action.payload.id,
        gameId: action.payload.game_id,
        userId: action.payload.user_id,
      };
    case playerhandActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload,
      };
    case playerhandActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId,
      };

    case playerhandActionTypes.SET_GAME_ID:
      return {
        ...state,
        gameId: action.payload,
      };

    case playerhandActionTypes.CLEAR_GAME_ID:
      return {
        ...state,
        gameId: initialState.gameId,
      };
    case playerhandActionTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case playerhandActionTypes.CLEAR_USER_ID:
      return {
        ...state,
        userId: initialState.userId,
      };
    case playerhandActionTypes.CREATE_PLAYER_HAND_FAIL:
    case playerhandActionTypes.LOAD_HAND_FAIL:
    case playerhandActionTypes.SET_GAME_ID_FAIL:
    case playerhandActionTypes.SET_HAND_ID_FAIL:
    case playerhandActionTypes.SET_USER_ID_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
