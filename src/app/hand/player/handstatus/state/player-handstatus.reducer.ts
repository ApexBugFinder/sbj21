import { PlayerHandStatusActions,playerhandstatusActionTypes } from "./player-handstatus.actions";
export interface PlayerHandStatusState {
  handId: number;
  status: string;
  username: string;
  error: string;
}

const initialState: PlayerHandStatusState = {
  handId: 0,
  status: 'INIT_STATE',
  username: 'INIT_USERNAME',
  error: ''
}


export function playerhandstatusReducer(state = initialState,
  action: PlayerHandStatusActions): PlayerHandStatusState {
  switch (action.type) {
    case playerhandstatusActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case playerhandstatusActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      };
    case playerhandstatusActionTypes.SET_HAND_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case playerhandstatusActionTypes.CLEAR_HAND_STATUS:
      return {
        ...state,
        status: initialState.status
      };
    case playerhandstatusActionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case playerhandstatusActionTypes.CLEAR_USERNAME:
      return {
        ...state,
        username: initialState.username
      };
    case playerhandstatusActionTypes.SET_HAND_ID_FAIL:
    case playerhandstatusActionTypes.SET_HAND_STATUS_FAIL:
    case playerhandstatusActionTypes.SET_HAND_STATUS_USERNAME_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };

  }
 }




