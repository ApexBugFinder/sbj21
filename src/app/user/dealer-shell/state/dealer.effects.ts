import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as playerActions from './dealer.actions';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { PlayerService } from '../../services/player.service';
import * as fromPlayer from '.';
import { Store, select } from '@ngrx/store';
import { Player } from '../../models/player';

@Injectable()
export class DealerEffects {
  playerUsername$: Observable<string | undefined>;
  username: string = 'dealer';
  constructor(
    private actions$: Actions,
    private playerService: PlayerService,
    private playerStore: Store<fromPlayer.State>
  ) {
    this.playerUsername$ = this.playerStore.pipe(
      select(fromPlayer.getUsername)
    );
    this.playerUsername$.subscribe((value) => {
      if (value) {
        this.username = value;
      }

    });
  }
  LoadPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(playerActions.playerActionTypes.LOAD_PLAYER),
      mergeMap((action: playerActions.LoadPlayer) =>
        this.playerService.getPlayerByName(this.username).pipe(
          tap(() => console.log(this.username)),
          tap((payload) =>
            console.log('NGRX EFFECT = LOAD PLAYER FROM DB', payload)
          ),
          map((player: Player) => {
            return new playerActions.LoadPlayerSuccess(player);
          }),
          catchError((err) => of(new playerActions.LoadPlayerFail(err)))
        )
      )
    )
  );
}
