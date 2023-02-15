import { Player, defaultPlayer } from '../../models/player';
import { DealerShellActions, playerActionTypes } from './dealer.actions';

export interface DealerState {
  username: string;
  dealer: Player;
  error: string;
}

const initialState: DealerState = {
  username: 'dealer',
  dealer: defaultPlayer,
  error: '',
};

export function playerReducer(
  state = initialState,
  action: DealerShellActions
): DealerState {
  switch (action.type) {
    case playerActionTypes.SET_PLAYER:
    case playerActionTypes.LOAD_PLAYER_SUCCESS:
      return {
        ...state,
        dealer: action.payload,
        username: action.payload.name,
      };
    case playerActionTypes.LOAD_PLAYER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case playerActionTypes.CLEAR_PLAYER:
      return {
        ...state,
        dealer: defaultPlayer,
      };
    case playerActionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case playerActionTypes.CLEAR_USERNAME:
      return {
        ...state,
        username: '',
      };
    default:
      return state;
  }
}
