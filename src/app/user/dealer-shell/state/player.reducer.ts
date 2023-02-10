import { Player, defaultPlayer } from '../../models/player';
import { DealerShellActions, playerActionTypes } from './player.actions';

export interface DealerState {
  username: string;
  player: Player;
  error: string;
}

const initialState: DealerState = {
  username: '',
  player: defaultPlayer,
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
        player: action.payload,
        username: action.payload.name
      };
    case playerActionTypes.LOAD_PLAYER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case playerActionTypes.CLEAR_PLAYER:
      return {
        ...state,
        player: defaultPlayer,
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
