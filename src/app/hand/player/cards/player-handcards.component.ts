import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Hand, HandCards } from '../../models/hand';
import { HandService } from '../../services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';
import { Card } from 'src/app/cards/models/card';
import { Observable } from 'rxjs';
import { MatDivider } from '@angular/material/divider';
import * as fromHand from '../../index';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-player-cards',
  templateUrl: './player-handcards.component.html',
  styleUrls: ['./player-handcards.component.scss'],
})
export class PlayerHandCardsComponent implements OnInit, DoCheck {
  @Input() hand_id: number;

  playerhandcards$: Observable<DeckCard[]>;
  constructor(private handService: HandService, private handStore: Store<fromHand.HandModuleState>) {
    this.playerhandcards$ = this.handStore.pipe(select(fromHand.getPlayerHandCards));
  }

  ngDoCheck(): void {}

  ngOnInit(): void {}
}
