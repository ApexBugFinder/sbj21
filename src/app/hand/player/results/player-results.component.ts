import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../../models/hand';
import { HandService } from '../../services/hand.service';
import * as fromPlayerHand from '../../index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-player-results',
  templateUrl: './player-results.component.html',
  styleUrls: ['./player-results.component.scss'],
})
export class PlayerResultsComponent implements OnInit {
  h_value$: Observable<number>;
  h_value: number;
  l_value$: Observable<number>;
  l_value: number;

  hand_id$: Observable<number>;
  user_id$: Observable<number>;

  player_lim$: Observable<number>;
  player_lim: number;
  private hand_Id: number;
  cards_count$: Observable<number>;

  cards_count: number;

  constructor(
    private handService: HandService,
    private handStore: Store<fromPlayerHand.State>
  ) {
    this.hand_id$ = this.handStore.pipe(select(fromPlayerHand.getPlayerHandId));
    this.h_value$ = this.handStore.pipe(
      select(fromPlayerHand.getPlayerHand_h_value)
    );
    this.l_value$ = this.handStore.pipe(
      select(fromPlayerHand.getPlayerHand_l_value)
    );
    this.player_lim$ = this.handStore.pipe(
      select(fromPlayerHand.getPlayerHand_player_lim)
    );
    this.cards_count$ = this.handStore.pipe(
      select(fromPlayerHand.getPlayerHandCardsCount)
    );
  }

  ngOnInit(): void {
    this.h_value$.subscribe((i: number) => {
      this.h_value = i;
    });
    this.l_value$.subscribe((i: number) => {
      this.l_value = i;
    });
    this.player_lim$.subscribe((i: number) => {
      this.player_lim = i;
    });
    this.hand_id$.subscribe((i: number) => {
      this.hand_Id = i;
    });
    this.cards_count$.subscribe((i: number) => {
      this.cards_count = i;
    });
  }
}
