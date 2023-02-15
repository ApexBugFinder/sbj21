import { Hand } from '../../../models/hand';
import { DealerHandActions, dealerhandActionTypes } from './dealer-hand.actions';

export interface DealerHandState {
  handId: number;
  userId: number;
  gameId: number;
  error: string;
}

const initialState: DealerHandState = {
  handId: 0,
  userId: 0,
  gameId: 0,
  error: '',
};

export function handReducer(
  state = initialState,
  action: DealerHandActions
): DealerHandState {
  switch (action.type) {
    case dealerhandActionTypes.CREATE_DEALER_HAND_SUCCESS:
    case dealerhandActionTypes.LOAD_HAND_SUCCESS:
      return {
        ...state,
        handId: action.payload.id,
        gameId: action.payload.game_id,
        userId: action.payload.user_id,
      };
    case dealerhandActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload,
      };
    case dealerhandActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId,
      };

    case dealerhandActionTypes.SET_GAME_ID:
      return {
        ...state,
        gameId: action.payload,
      };

    case dealerhandActionTypes.CLEAR_GAME_ID:
      return {
        ...state,
        gameId: initialState.gameId,
      };
    case dealerhandActionTypes.SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case dealerhandActionTypes.CLEAR_USER_ID:
      return {
        ...state,
        userId: initialState.userId,
      };
    case dealerhandActionTypes.CREATE_DEALER_HAND_FAIL:
    case dealerhandActionTypes.LOAD_HAND_FAIL:
    case dealerhandActionTypes.SET_GAME_ID_FAIL:
    case dealerhandActionTypes.SET_HAND_ID_FAIL:
    case dealerhandActionTypes.SET_USER_ID_FAIL:
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
