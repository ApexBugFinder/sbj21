import * as fromRoot from '../state/app.state';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromHand from './state/hand.reducer';
import * as fromHandStatus from './handstatus/state/handstatus.reducer';
export interface HandModuleState
{
  hand: fromHand.HandState,
  handresults
  handcards
  handstatus: fromHandStatus.HandStatusState
}


export interface State extends fromRoot.State
{
  handModule: HandModuleState
 }

 export const handReducers: ActionReducerMap<HandModuleState, any > = {
   hand: fromHand.handReducer,
   handstatus: fromHandStatus.handstatusReducer

}
