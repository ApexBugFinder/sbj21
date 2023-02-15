import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as playerHandActions from './player-hand.actions';

import * as playerHandCardsActions from '../../cards/state/player-handcards.action';
import * as playerHandstatusActions from '../../handstatus/state/player-handstatus.actions';
import * as playerHandResultsActions from '../../results/state/player-handresults.actions';

import { Store, select } from '@ngrx/store';
import * as fromShared from '../../../../shared/state';
import * as fromUser from '../../../../user/index';
import * as fromPlayerHand from '../state';
import * as fromPlayerHandStatus from '../../handstatus/state';

import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Hand } from '../../../models/hand';
import { HandService } from 'src/app/hand/services/hand.service';
@Injectable()
export class PlayerHandEffects {
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
    private playerhandStore: Store<fromPlayerHand.State>,
    private playerHandStatusStore: Store<fromPlayerHandStatus.State>

  ) {
    this.dealer$ = this.userStore.pipe(select(fromUser.getDealer));
    this.dealer$.subscribe((i: Player) => (this.dealer = i));

    this.player$ = this.userStore.pipe(select(fromUser.getPlayer));
    this.player$.subscribe((i: Player) => (this.player = i));

    this.gameID$ = this.sharedStore.pipe(select(fromShared.getGameId));
    this.gameID$.subscribe((i: number) => (this.gameID = i));
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
            this.playerhandStore.dispatch(new playerHandResultsActions.SetHandId(newHand.id));
            this.playerhandStore.dispatch(new playerHandResultsActions.SetHighValue(newHand.h_value));
            this.playerhandStore.dispatch(new playerHandResultsActions.SetLowValue(newHand.l_value));
            this.playerhandStore.dispatch(new playerHandResultsActions.SetUserId(newHand.user_id));
            this.playerHandStatusStore.dispatch(new playerHandstatusActions.SetHandId(newHand.id));
            this.playerHandStatusStore.dispatch(new playerHandstatusActions.SetHandStatus(newHand.status));

            return new playerHandActions.CreatePlayerHandSuccess(newHand);
          }),
          catchError((err) => of(new playerHandActions.CreatePlayerHandFail(err)))
        )
      )
    )
  );


}
