import * as fromHandRoot from '../index';
import { HandState } from './hand.reducer';

export interface State extends fromHandRoot.HandModuleState {
  hand: HandState
}
