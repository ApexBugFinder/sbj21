import { HandResultsActions, handresultsActionTypes } from './handresults.actions';
export interface HandResultsState{
  handId: number;
  player_limit: number;
  h_value: number;
  l_value: number;
  user_id: number;
  error: string;
}

const initialState: HandResultsState = {
  handId: 0,
  player_limit: 0,
  h_value: 0,
  l_value: 0,
  user_id: 0,
  error: ''
}


export function handResultsReducer(state = initialState,
  action: HandResultsActions): HandResultsState{
  switch (action.type) {
    case handresultsActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case handresultsActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      }
    case handresultsActionTypes.SET_USER_ID:
      return {
        ...state,
        user_id: action.payload
      };
    case handresultsActionTypes.CLEAR_USER_ID:
      return {
        ...state,
        user_id: initialState.user_id
      };
    case handresultsActionTypes.SET_PLAYER_LIMIT:
      return {
        ...state,
        player_limit: action.payload
      };
    case handresultsActionTypes.CLEAR_PLAYER_LIMIT:
      return {
        ...state,
        player_limit: initialState.player_limit
      };
    case handresultsActionTypes.SET_H_VALUE:
      return {
        ...state,
        h_value: action.payload
      };
    case handresultsActionTypes.CLEAR_H_VALUE:
      return {
        ...state,
        h_value: initialState.h_value
      };
    case handresultsActionTypes.SET_L_VALUE:
      return {
        ...state,
        l_value: action.payload
      };
    case handresultsActionTypes.CLEAR_L_VALUE:
      return {
        ...state,
        l_value: initialState.l_value
      };

    // ERRRORS
    case handresultsActionTypes.HAND_ID_FAIL:
    case handresultsActionTypes.USER_ID_FAIL:
    case handresultsActionTypes.PLAYER_LIMIT_FAIL:
    case handresultsActionTypes.H_VALUE_FAIL:
    case handresultsActionTypes.L_VALUE_FAIL:
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

