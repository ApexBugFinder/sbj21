import { Actions, EffectSources, createEffect, ofType } from "@ngrx/effects";
import { Game } from "src/app/models/game";
import { GameService } from "src/app/services/game.service";

import { Observable, catchError, map, mergeMap, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { Store, select,  } from '@ngrx/store';
import * as fromUserPlayer from '../../user/player-shell/state';
import * as fromDealerPlayer from '../../user/dealer-shell/state';
import { Player } from "src/app/user/models/player";
import { PlayerService } from "src/app/user/services/player.service";
import * as fromShared from './';
import * as sharedActions from './shared.actions';
// import { PlayerShellActions } from '../../user/player-shell/state/player.actions';
// import { DealerShellActions } from '../../user/dealer-shell/state/player.actions';
import * as PlayerShellActions from '../../user/player-shell/state/player.actions';
import * as DealerShellActions from '../../user/dealer-shell/state/player.actions';
@Injectable()
export class SharedEffects {

  aGame: Game;
  player$: Observable<Player | undefined>;
  player: Player | undefined;
  dealer$: Observable<Player | undefined>;
  dealer: Player;
  constructor(
    private actions$: Actions,
    private gameService: GameService,
    private playerShellStore: Store<fromUserPlayer.State>,
    private dealerShellStore: Store<fromDealerPlayer.State>,
    private sharedStore: Store<fromShared.SharedModuleState>,

    private playerService: PlayerService
  ) {
    this.player$ = this.sharedStore.pipe(select(fromShared.getGuestPlayer));
    this.dealer$ = this.sharedStore.pipe(select(fromShared.getDealer));
    this.player$.subscribe((value: Player) => (this.player = value));
    this.dealer$.subscribe((value: Player) => (this.dealer = value));
  }

  CreateGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sharedActions.sharedActionTypes.CREATE_GAME),
      mergeMap((action: sharedActions.CreateGame) =>
        this.gameService.create(this.player, this.dealer).pipe(
          tap(() =>
            console.log(
              `the dealer:  ${JSON.stringify(this.dealer)},  the player: ${JSON.stringify(this.player)}`
            )
          ),

          tap((payload) =>
                console.log(
                  'NGRX EFFECT - CREATE GAME return payload from BackEnd',
                  payload
                )
          ),
          map((newGame: Game) => {
            // SET  PLAYER SHELL
            this.playerShellStore.dispatch(new PlayerShellActions.SetPlayerShellPlayer(this.player));
            this.dealerShellStore.dispatch(new DealerShellActions.SetDealerShellPlayer(this.dealer));
            // CREATE HANDs
             
            return new sharedActions.CreateGameSuccess(newGame);
          }),
          catchError((err)=> of(new sharedActions.CreateGameFail(err)))
        )
      )
    )
  );
}
