import { Player, defaultPlayer } from '../../models/player';
import { PlayerShellActions, playerActionTypes } from './player.actions';

export interface PlayerState {
  username: string;
  player: Player;
  error: string;
}

const initialState: PlayerState = {
  username: '',
  player: defaultPlayer,
  error: '',
};

export function playerReducer(
  state = initialState,
  action: PlayerShellActions
): PlayerState {
  switch (action.type) {
    case playerActionTypes.SET_PLAYERSHELL_PLAYER:
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
