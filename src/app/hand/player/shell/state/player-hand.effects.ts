import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as playerHandActions from './player-hand.actions';

import * as playerHandCardsActions from '../../cards/state/player-handcards.action';
import * as playerHandstatusActions from '../../handstatus/state/player-handstatus.actions';
import * as playerHandResultsActions from '../../results/state/player-handresults.actions';

import { Store, select } from '@ngrx/store';
import * as fromShared from '../../../../shared/state';
import * as fromUser from '../../../../user/index';
import * as fromPlayerHand from '../../../index';
import * as fromPlayerHandStatus from '../../handstatus/state/index';
import * as fromDeck from '../../../../deck/index';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Hand } from '../../../models/hand';
import { HandService } from 'src/app/hand/services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';
@Injectable()
export class PlayerHandEffects {
  dealer$: Observable<Player>;
  dealer: Player = defaultPlayer;
  player$: Observable<Player>;
  player: Player = defaultPlayer;
  gameID$: Observable<number>;
  gameID: number;
  playerHandId$: Observable<number>;
  playerHandId: number = 0;
  displayCards$: Observable<DeckCard[]>;
  displayCards: DeckCard[] = [];
  playerHandStatus$: Observable<string>;
  playerHandStatus: string = '';
  constructor(
    private actions$: Actions,
    private handService: HandService,
    private userStore: Store<fromUser.UserModuleState>,
    private sharedStore: Store<fromShared.SharedModuleState>,
    private playerhandStore: Store<fromPlayerHand.State>,
    private deckStore: Store<fromDeck.DeckModuleState>,
  
  ) {
    this.dealer$ = this.userStore.pipe(select(fromUser.getDealer));
    this.dealer$.subscribe((i: Player) => (this.dealer = i));

    this.player$ = this.userStore.pipe(select(fromUser.getPlayer));
    this.player$.subscribe((i: Player) => (this.player = i));

    this.playerHandStatus$ = this.playerhandStore.pipe(select(fromPlayerHand.getPlayerHandStatus));
    this.playerHandStatus$.subscribe((i: string) => {
      if (i)
      this.playerHandStatus = i
  });
    this.gameID$ = this.sharedStore.pipe(select(fromShared.getGameId));
    this.gameID$.subscribe((i: number) => (this.gameID = i));
    this.displayCards$ = this.deckStore.pipe(select(fromDeck.getDisplayCards));
    this.displayCards$.subscribe( {
      next: (cards: DeckCard[]) => {
      this.displayCards = cards;
    },
    complete: () => console.log('Completed Successfully fetching the displaycards from deck Store'),
    error: (err) => console.log('OOps somethign went wrong when fetching displayCards from the deckStore ',err)}
    );

  this.playerHandId$ = this.playerhandStore.pipe(select(fromPlayerHand.getPlayerHandId));
    this.playerHandId$.subscribe( {
      next: (handId: number) => {
        this.playerHandId = handId
    },
    complete: () => console.log('Completed Successfully fetching  handID from Player Hand Store'),
    error: (err) => console.log('OOps somethign went wrong when fetching  Player HandID from Player Hand Store.',err)}
    );
 }

  CreatePlayerHand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerHandActions.playerhandActionTypes.CREATE_PLAYER_HAND),
      mergeMap((action: playerHandActions.CreatePlayerHand) =>
        this.handService.createHand(this.player.id, this.gameID).pipe(
          tap(() =>
            console.log(
              `the player: ${JSON.stringify(
                this.player
              )}, the gameID: ${JSON.stringify(this.gameID)}`
            )
          ),
          tap((payload) =>
            console.log(
              'NGRX EFFECT - CREATE HAND FOR PLAYER PAYlOAD',
              JSON.stringify(payload)
            )
          ),
          map((newHand: Hand) => {
            this.playerhandStore.dispatch(
              new playerHandResultsActions.SetHandId(newHand.id)
            );
            this.playerhandStore.dispatch(
              new playerHandResultsActions.SetHighValue(newHand.h_value)
            );
            this.playerhandStore.dispatch(
              new playerHandResultsActions.SetLowValue(newHand.l_value)
            );
            this.playerhandStore.dispatch(
              new playerHandResultsActions.SetUserId(newHand.user_id)
            );
            this.playerhandStore.dispatch(
              new playerHandstatusActions.SetHandId(newHand.id)
            );
            this.playerhandStore.dispatch(
              new playerHandstatusActions.SetHandStatus(newHand.status)
            );
            this.playerhandStore.dispatch(
              new playerHandstatusActions.SetHandStatusUsername(
                this.player.name
              )
            );

            return new playerHandActions.CreatePlayerHandSuccess(newHand);
          }),
          catchError((err) =>
            of(new playerHandActions.CreatePlayerHandFail(err))
          )
        )
      )
    )
  );

  AddCardsToPlayerHand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerHandActions.playerhandActionTypes.ADD_CARDS_TO_PLAYER_HAND),
      mergeMap((action: playerHandActions.AddCardsToPlayerHand) =>
        this.handService
          .addCardsToHand(this.displayCards, this.playerHandId)
          .pipe(
            tap(() =>
              console.log(
                `the displayCards: ${JSON.stringify(
                  this.displayCards
                )}, \nthe handID: ${this.playerHandId}`
              )
            ),
            tap((payload) => {
              console.log(
                'NGRX EFFECT - ADD TO HAND FOR DEALER - PAYlOAD',
                JSON.stringify(payload)
              );
            this.playerhandStore.dispatch(
              new playerHandstatusActions.SetHandStatus(payload.status)
            );
            console.log(`HAND VALUES: ${payload.h_value}. ${payload.l_value}`);
            this.playerhandStore.dispatch(
              new playerHandResultsActions.SetHighValue(payload.h_value)
            );
            this.playerhandStore.dispatch(
              new playerHandResultsActions.SetLowValue(payload.l_value)
            );
            }

            ),
            map((hand: Hand) => {


              return new playerHandActions.AddCardsToPlayerHandSuccess(hand);
            }),
            catchError((err) =>
              of(new playerHandActions.AddCardsToPlayerHandFail(err))
            )
          )
      )
    )
  );


  UpdateHandStatus = createEffect(() =>
    this.actions$.pipe(
      ofType(playerHandActions.playerhandActionTypes.UPDATE_PLAYER_HAND_STATUS),
      mergeMap((action: playerHandActions.UpdatePlayerHandStatus) =>
        this.handService.updatePlayerHandStatus(this.playerHandId, this.playerHandStatus).pipe(
          tap(() => console.log(`update Player Hand Status to:  ${this.playerHandStatus}`)),
          tap((payload) => {
            console.log(
              'NGRX EFFECT - UPDATE PLAYER HAND STATUS- PAYlOAD',
              JSON.stringify(payload)
            );
            this.playerhandStore.dispatch(new playerHandstatusActions.SetHandStatus(payload.status));
          }),
          map((hand: Hand) => {
            return new playerHandActions.UpdatePlayerHandStatusSuccess
          }),
          catchError((err) =>
            of(new playerHandActions.UpdatePlayerHandStatusFail(err)))
        ))
    ));
}
