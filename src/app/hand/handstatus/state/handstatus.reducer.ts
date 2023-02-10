import { HandStatusActions,handstatusActionTypes } from "./handstatus.actions";
export interface HandStatusState {
  handId: number;
  status: string;
  username: string;
  error: string;
}

const initialState: HandStatusState = {
  handId: 0,
  status: 'INIT_STATE',
  username: 'INIT_USERNAME',
  error: ''
}


export function handstatusReducer(state = initialState,
  action: HandStatusActions): HandStatusState {
  switch (action.type) {
    case handstatusActionTypes.SET_HAND_ID:
      return {
        ...state,
        handId: action.payload
      };
    case handstatusActionTypes.CLEAR_HAND_ID:
      return {
        ...state,
        handId: initialState.handId
      };
    case handstatusActionTypes.SET_HAND_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case handstatusActionTypes.CLEAR_HAND_STATUS:
      return {
        ...state,
        status: initialState.status
      };
    case handstatusActionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case handstatusActionTypes.CLEAR_USERNAME:
      return {
        ...state,
        username: initialState.username
      };
    case handstatusActionTypes.SET_HAND_ID_FAIL:
    case handstatusActionTypes.SET_HAND_STATUS_FAIL:
    case handstatusActionTypes.SET_HAND_STATUS_USERNAME_FAIL:
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




