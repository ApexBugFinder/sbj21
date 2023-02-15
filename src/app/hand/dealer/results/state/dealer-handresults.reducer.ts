import { DealerHandResultsActions, dealerhandresultsActionTypes } from './dealer-handresults.actions';
export interface DealerHandResultsState{
  handId: number;
  player_limit: number;
  h_value: number;
  l_value: number;
  user_id: number;
  error: string;
}

const initialState: DealerHandResultsState = {
  handId: 0,
  player_limit: 0,
  h_value: 0,
  l_value: 0,
  user_id: 0,
  error: ''
}


export function handResultsReducer(state = initialState,
  action: DealerHandResultsActions): DealerHandResultsState{
  switch (action.type) {
    case dealerhandresultsActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case dealerhandresultsActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      }
    case dealerhandresultsActionTypes.SET_USER_ID:
      return {
        ...state,
        user_id: action.payload
      };
    case dealerhandresultsActionTypes.CLEAR_USER_ID:
      return {
        ...state,
        user_id: initialState.user_id
      };
    case dealerhandresultsActionTypes.SET_PLAYER_LIMIT:
      return {
        ...state,
        player_limit: action.payload
      };
    case dealerhandresultsActionTypes.CLEAR_PLAYER_LIMIT:
      return {
        ...state,
        player_limit: initialState.player_limit
      };
    case dealerhandresultsActionTypes.SET_H_VALUE:
      return {
        ...state,
        h_value: action.payload
      };
    case dealerhandresultsActionTypes.CLEAR_H_VALUE:
      return {
        ...state,
        h_value: initialState.h_value
      };
    case dealerhandresultsActionTypes.SET_L_VALUE:
      return {
        ...state,
        l_value: action.payload
      };
    case dealerhandresultsActionTypes.CLEAR_L_VALUE:
      return {
        ...state,
        l_value: initialState.l_value
      };

    // ERRRORS
    case dealerhandresultsActionTypes.HAND_ID_FAIL:
    case dealerhandresultsActionTypes.USER_ID_FAIL:
    case dealerhandresultsActionTypes.PLAYER_LIMIT_FAIL:
    case dealerhandresultsActionTypes.H_VALUE_FAIL:
    case dealerhandresultsActionTypes.L_VALUE_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return {
        ...state
      }
  }
}

