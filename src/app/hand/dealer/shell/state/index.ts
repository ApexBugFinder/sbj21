import * as fromHandRoot from '../../../index';
import { DealerHandState } from './dealer-hand.reducer';

export interface State extends fromHandRoot.HandModuleState {
  hand: DealerHandState
}
