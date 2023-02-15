import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dealerHandActions from './dealer-hand.actions';
import * as dealerHandCardsActions from '../../cards/state/dealer_handcards.action';
import * as dealerHandstatusActions from '../../handstatus/state/dealer-handstatus.actions';
import * as dealerHandResultsActions from '../../results/state/dealer-handresults.actions'

import { Store, select } from '@ngrx/store';
import * as fromShared from '../../../../shared/state';
import * as fromUser from '../../../../user/index';
import * as fromHand from '../../../../hand/index';
import * as fromDealerHand from '../../shell/state/dealer-hand.reducer';

import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Hand } from '../../../models/hand';
import { HandService } from 'src/app/hand/services/hand.service';
@Injectable()
export class DealerHandEffects {
  dealer$: Observable<Player>;
  dealer: Player = defaultPlayer;
  player$: Observable<Player>;
  player: Player = defaultPlayer;
  gameID$: Observable<number>;
  gameID: number;
  constructor(
    private actions$: Actions,
    private handService: HandService,
    private userStore: Store<fromUser.UserModuleState>,
    private sharedStore: Store<fromShared.SharedModuleState>,
    private handStore: Store<fromHand.HandModuleState>
  ) {
    this.dealer$ = this.userStore.pipe(select(fromUser.getDealer));
    this.dealer$.subscribe((i: Player) => (this.dealer = i));

    this.player$ = this.userStore.pipe(select(fromUser.getPlayer));
    this.player$.subscribe((i: Player) => (this.player = i));

    this.gameID$ = this.sharedStore.pipe(select(fromShared.getGameId));
    this.gameID$.subscribe((i: number) => (this.gameID = i));
  }


  CreateDealerHand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dealerHandActions.dealerhandActionTypes.CREATE_DEALER_HAND),
      mergeMap((action: dealerHandActions.CreateDealerHand) =>
        this.handService.createHand(this.dealer.id, this.gameID).pipe(
          tap(() =>
            console.log(
              `the dealer: ${JSON.stringify(
                this.dealer
              )}, the gameID: ${JSON.stringify(this.gameID)}`
            )
          ),
          tap((payload) =>
            console.log(
              'NGRX EFFECT - CREATE HAND FOR DEALER PAYlOAD',
              JSON.stringify(payload)
            )
          ),
          map((newHand: Hand) => {
            new dealerHandResultsActions.SetHandId(newHand.id);
            new dealerHandResultsActions.SetHighValue(newHand.h_value);
            new dealerHandResultsActions.SetLowValue(newHand.l_value);
            new dealerHandResultsActions.SetUserId(newHand.id);
            new dealerHandstatusActions.SetHandId(newHand.id);

            return new dealerHandActions.CreateDealerHandSuccess(newHand);
          }),
          catchError((err) => of(new dealerHandActions.CreateDealerHandFail(err)))
        )
      )
    )
  );
}
