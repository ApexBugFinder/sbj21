import { share } from "rxjs";
import { SharedActions, sharedActionTypes } from "./shared.actions";
import { Player, defaultPlayer } from "src/app/user/models/player";

export interface SharedState {
  gameId: number;
  game_status: string;
  started_at: Date;
  finished_at: Date;
  user_turn: Player;
  guest_player: Player;
  dealer: Player;
  error: string;
}

const initialState: SharedState = {
  gameId: 0,
  game_status: 'PRE',
  started_at: new Date(),
  finished_at: new Date(),
  user_turn: defaultPlayer,
  guest_player: defaultPlayer,
  dealer: defaultPlayer,
  error: ''
};

export function sharedReducer(
  state = initialState,
  action: SharedActions
): SharedState {
  switch (action.type) {
    case sharedActionTypes.CREATE_GAME_SUCCESS:
      return {
        ...state,
        gameId: action.payload.id,
        game_status: action.payload.game_status,
        started_at: action.payload.started_at,
      };
    case sharedActionTypes.SET_GAME_ID:
      return {
        ...state,
        gameId: action.payload,
      };
    case sharedActionTypes.END_GAME:
      return {
        ...state,
        finished_at: action.payload,
      };
    case sharedActionTypes.START_GAME:
      return {
        ...state,
        game_status: action.payload,
      };
    case sharedActionTypes.SET_USER_TURN:
      return {
        ...state,
        user_turn: action.payload,
      };

    case sharedActionTypes.SET_GUEST_PLAYER:
      return {
        ...state,
        guest_player: action.payload,
      };
    case sharedActionTypes.SET_DEALER:
      return {
        ...state,
        dealer: action.payload,
      };
    case sharedActionTypes.CHANGE_GAME_STATUS_TO_COMPLETE_SUCCESS:
    case sharedActionTypes.CHANGE_GAME_STATUS_TO_ACTIVE_SUCCESS:
      return {
        ...state,
        game_status: action.payload.game_status,
      }
    case sharedActionTypes.CHANGE_GAME_STATUS_TO_ACTIVE_FAIL:
    case sharedActionTypes.CHANGE_GAME_STATUS_TO_COMPLETE_FAIL:
    case sharedActionTypes.CREATE_GAME_FAIL:
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
