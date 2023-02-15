import { DealerHandStatusActions,dealerhandstatusActionTypes } from "./dealer-handstatus.actions";
export interface DealerHandStatusState {
  handId: number;
  status: string;
  username: string;
  error: string;
}

const initialState: DealerHandStatusState = {
  handId: 0,
  status: 'INIT_STATE',
  username: 'INIT_USERNAME',
  error: ''
}


export function dealerhandstatusReducer(state = initialState,
  action: DealerHandStatusActions): DealerHandStatusState {
  switch (action.type) {
    case dealerhandstatusActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case dealerhandstatusActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      };
    case dealerhandstatusActionTypes.SET_HAND_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case dealerhandstatusActionTypes.CLEAR_HAND_STATUS:
      return {
        ...state,
        status: initialState.status
      };
    case dealerhandstatusActionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case dealerhandstatusActionTypes.CLEAR_USERNAME:
      return {
        ...state,
        username: initialState.username
      };
    case dealerhandstatusActionTypes.SET_HAND_ID_FAIL:
    case dealerhandstatusActionTypes.SET_HAND_STATUS_FAIL:
    case dealerhandstatusActionTypes.SET_HAND_STATUS_USERNAME_FAIL:
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




