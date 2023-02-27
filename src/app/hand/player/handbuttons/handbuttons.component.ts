import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../../models/hand';
import { Store, select } from '@ngrx/store';
import * as fromShared from '../../../shared/state/';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Observable, share } from 'rxjs';
import * as fromHand from '../../index';
import * as sharedActions from '../../../shared/state/shared.actions';
import * as playerHandActions from '../shell/state/player-hand.actions';
import * as playerHandStatusActions from '../handstatus/state/player-handstatus.actions';
import * as dealerHandActions from '../../dealer/shell/state/dealer-hand.actions';
import * as dealerHandStatusActions from '../../dealer/handstatus/state/dealer-handstatus.actions';
@Component({
  selector: 'app-handbuttons',
  templateUrl: './handbuttons.component.html',
  styleUrls: ['./handbuttons.component.scss'],
})
export class HandbuttonsComponent implements OnInit {
  myColor = 'gold';
  @Input() handId: number;
  player$: Observable<Player>;
  player: Player = defaultPlayer;
  dealer$: Observable<Player>;
  dealer: Player = defaultPlayer;
  playersTurn$: Observable<Player>;
  playersturn: Player = defaultPlayer;

  constructor(private sharedStore: Store<fromShared.SharedModuleState>,
    private handStore: Store<fromHand.HandModuleState>) {
    this.player$ = this.sharedStore.pipe(select(fromShared.getPlayer));
    this.playersTurn$ = this.sharedStore.pipe(select(fromShared.getWhoseTurn));
    this.dealer$ = this.sharedStore.pipe(select(fromShared.getDealer))

  }

  ngOnInit(): void {
    console.log('INPUTTED HAND: ', this.handId);

    this.dealer$.subscribe({
      next: (item: Player) => {
        this.dealer = item;
    },
    complete: () => console.log('Completed Successfully fetching the dealer from the shared Store'),
    error: (err) => console.log('OOps somethign went wrong when fetching the dealer from the shared store',err)}
    );
    this.player$.subscribe({
      next: (item: Player) => {
        this.player = item;
    },
    complete: () => console.log('Completed Successfully fetching player from the shared Store'),
    error: (err) => console.log('OOps somethign went wrong when fetching the player from the shared Store',err)}
    );
    this.playersTurn$.subscribe( {
      next: (item: Player) => {
        this.playersturn = item;
    },
    complete: () => console.log('Completed Successfully fetching which player\'s turn from the SharedStore'),
    error: (err) => console.log('OOps somethign went wrong when fetching which player\'s turn from the SharedStore',err)}
    );
  }

  holdButton() {
    console.log(`PLayer: ${this.player}, TURN: ${this.playersturn}`);
    if (this.playersturn == this.player) {
      this.sharedStore.dispatch(new sharedActions.SetUserTurn(this.dealer));
      this.handStore.dispatch(new playerHandStatusActions.SetHandStatus('HOLD'));
      this.handStore.dispatch(new playerHandActions.UpdatePlayerHandStatus());
      this.handStore.dispatch(new dealerHandStatusActions.SetHandStatus('ACTIVE'));
      this.handStore.dispatch(new dealerHandActions.UpdateDealerHandStatus)
    }
  }
}
