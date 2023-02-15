import * as fromHandRoot from '../../../index';
import { PlayerHandState } from './player-hand.reducer';

export interface State extends fromHandRoot.HandModuleState {
  hand: PlayerHandState
}
