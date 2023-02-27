import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dealerHandActions from './dealer-hand.actions';
import * as dealerHandCardsActions from '../../cards/state/dealer-handcards.action';

import * as dealerHandResultsActions from '../../results/state/dealer-handresults.actions';

import { Store, select } from '@ngrx/store';
import * as fromShared from '../../../../shared/state';
import * as fromUser from '../../../../user/index';
import * as fromHand from '../../../../hand/index';
import * as fromDealerHand from '../../../index';
import * as fromDealerHandStatus from '../../handstatus/state/dealer-handstatus.reducer';
import * as dealerHandstatusActions from '../../handstatus/state/dealer-handstatus.actions';
import * as fromDeck from '../../../../deck/index';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Hand } from '../../../models/hand';
import { HandService } from 'src/app/hand/services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';
@Injectable()
export class DealerHandEffects {
  dealer$: Observable<Player>;
  displayCards$: Observable<DeckCard[]>;
  displayCards: DeckCard[] = [];
  dealer: Player = defaultPlayer;
  player$: Observable<Player>;
  player: Player = defaultPlayer;
  gameID$: Observable<number>;
  gameID: number;
  dealerHandId$: Observable<number>;
  dealerHandId: number = 0;
  dealerHandStatus$: Observable<string>;
  dealerHandStatus: string = '';
  constructor(
    private actions$: Actions,
    private handService: HandService,
    private userStore: Store<fromUser.UserModuleState>,
    private sharedStore: Store<fromShared.SharedModuleState>,
    private dealerHandStore: Store<fromDealerHand.State>,
    private dealerhandstatusStore: Store<fromDealerHandStatus.DealerHandStatusState>,
    private deckstore: Store<fromDeck.DeckModuleState>
  ) {
    this.dealer$ = this.userStore.pipe(select(fromUser.getDealer));
    this.dealer$.subscribe((i: Player) => (this.dealer = i));

    this.player$ = this.userStore.pipe(select(fromUser.getPlayer));
    this.player$.subscribe((i: Player) => (this.player = i));

    this.gameID$ = this.sharedStore.pipe(select(fromShared.getGameId));
    this.gameID$.subscribe((i: number) => (this.gameID = i));
    this.displayCards$ = this.deckstore.pipe(select(fromDeck.getDisplayCards));
    this.displayCards$.subscribe((i) => (this.displayCards = i));
    this.dealerHandId$ = this.dealerHandStore.pipe(
      select(fromDealerHand.getDealerHandId)
    );
    this.dealerHandId$.subscribe((i) => (this.dealerHandId = i));
    this.dealerHandStatus$ = this.dealerHandStore.pipe(select(fromDealerHand.getDealerHandStatus));
    this.dealerHandStatus$.subscribe( {
      next: (item: string) => {
        if (item)
        this.dealerHandStatus = item;
    },
    complete: () => console.log('Completed Successfully fetching Dealer Hand Status from the Hand Store'),
    error: (err) => console.log('OOps somethign went wrong when fetching the Dealer Hand Status from the Hand Store',err)}
    );
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
            this.dealerHandStore.dispatch(
              new dealerHandstatusActions.SetHandId(newHand.id)
            );
            this.dealerHandStore.dispatch(
              new dealerHandstatusActions.SetHandStatus(newHand.status)
            );
            this.dealerHandStore.dispatch(
              new dealerHandstatusActions.SetHandStatusUsername(
                this.dealer.name
              )
            );

            return new dealerHandActions.CreateDealerHandSuccess(newHand);
          }),
          catchError((err) =>
            of(new dealerHandActions.CreateDealerHandFail(err))
          )
        )
      )
    )
  );
  AddCardsToDealerHand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dealerHandActions.dealerhandActionTypes.ADD_CARDS_TO_DEALER_HAND),
      mergeMap((action: dealerHandActions.AddCardsToDealerHand) =>
        this.handService
          .addCardsToHand(this.displayCards, this.dealerHandId)
          .pipe(
            tap(() =>
              console.log(
                `the displayCards: ${JSON.stringify(
                  this.displayCards
                )}, \nthe handID: ${this.dealerHandId}`
              )
            ),
            tap((payload) => {
              console.log(
                'NGRX EFFECT - ADD TO HAND FOR DEALER - PAYlOAD',
                JSON.stringify(payload)
              );
              this.dealerHandStore.dispatch(
                new dealerHandstatusActions.SetHandStatus(payload.status)
              );
              console.log(
                `HAND VALUES: ${payload.h_value}. ${payload.l_value}`
              );
              this.dealerHandStore.dispatch(
                new dealerHandResultsActions.SetHighValue(payload.h_value)
              );
              this.dealerHandStore.dispatch(
                new dealerHandResultsActions.SetLowValue(payload.l_value)
              );
            }),
            map((hand: Hand) => {
              return new dealerHandActions.AddCardsToDealerHandSuccess(hand);
            }),
            catchError((err) =>
              of(new dealerHandActions.AddCardsToDealerHandFail(err))
            )
          )
      )
    )
  );

  UpdateHandStatus = createEffect(() =>
    this.actions$.pipe(
      ofType(dealerHandActions.dealerhandActionTypes.UPDATE_DEALER_HAND_STATUS),
      mergeMap((action: dealerHandActions.UpdateDealerHandStatus) =>
        this.handService
          .updatePlayerHandStatus(this.dealerHandId, this.dealerHandStatus)
          .pipe(
            tap(() =>
              console.log(
                `update Dealer Hand Status to:  ${this.dealerHandStatus}`
              )
            ),
            tap((payload) => {
              console.log(
                'NGRX EFFECT - UPDATE DEALER HAND STATUS- PAYlOAD',
                JSON.stringify(payload)
              );
              this.dealerHandStore.dispatch(
                new dealerHandstatusActions.SetHandStatus(payload.status)
              );
            }),
            map((hand: Hand) => {
              return new dealerHandActions.UpdateDealerHandStatusSuccess();
            }),
            catchError((err) =>
              of(new dealerHandActions.UpdateDealerHandStatusFail(err))
            )
          )
      )
    )
  );
}
