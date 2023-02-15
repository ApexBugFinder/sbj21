import { PlayerHandResultsActions, playerhandresultsActionTypes } from './player-handresults.actions';
export interface PlayerHandResultsState{
  handId: number;
  player_limit: number;
  h_value: number;
  l_value: number;
  user_id: number;
  error: string;
}

const initialState: PlayerHandResultsState = {
  handId: 0,
  player_limit: 0,
  h_value: 0,
  l_value: 0,
  user_id: 0,
  error: ''
}


export function playerhandResultsReducer(state = initialState,
  action: PlayerHandResultsActions): PlayerHandResultsState{
  switch (action.type) {
    case playerhandresultsActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case playerhandresultsActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      }
    case playerhandresultsActionTypes.SET_USER_ID:
      return {
        ...state,
        user_id: action.payload
      };
    case playerhandresultsActionTypes.CLEAR_USER_ID:
      return {
        ...state,
        user_id: initialState.user_id
      };
    case playerhandresultsActionTypes.SET_PLAYER_LIMIT:
      return {
        ...state,
        player_limit: action.payload
      };
    case playerhandresultsActionTypes.CLEAR_PLAYER_LIMIT:
      return {
        ...state,
        player_limit: initialState.player_limit
      };
    case playerhandresultsActionTypes.SET_H_VALUE:
      return {
        ...state,
        h_value: action.payload
      };
    case playerhandresultsActionTypes.CLEAR_H_VALUE:
      return {
        ...state,
        h_value: initialState.h_value
      };
    case playerhandresultsActionTypes.SET_L_VALUE:
      return {
        ...state,
        l_value: action.payload
      };
    case playerhandresultsActionTypes.CLEAR_L_VALUE:
      return {
        ...state,
        l_value: initialState.l_value
      };

    // ERRRORS
    case playerhandresultsActionTypes.HAND_ID_FAIL:
    case playerhandresultsActionTypes.USER_ID_FAIL:
    case playerhandresultsActionTypes.PLAYER_LIMIT_FAIL:
    case playerhandresultsActionTypes.H_VALUE_FAIL:
    case playerhandresultsActionTypes.L_VALUE_FAIL:
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

