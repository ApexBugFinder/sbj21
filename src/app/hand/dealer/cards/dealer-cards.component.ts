import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Hand, HandCards } from '../../models/hand';
import { HandService } from '../../services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';
import { Card } from 'src/app/cards/models/card';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromHand from '../../index';

@Component({
  selector: 'app-dealer-cards',
  templateUrl: './dealer-cards.component.html',
  styleUrls: ['./dealer-cards.component.scss'],
})
export class DealerCardsComponent implements OnInit, DoCheck {
  @Input() hand_id: number;

  handcards: HandCards;
  handcards$: Observable<DeckCard[]>;
  @Input() cards: DeckCard[] = [];
  constructor(private handStore: Store<fromHand.HandModuleState>) {

    this.handcards$ = this.handStore.pipe(select(fromHand.getDealerHandCards))
  }


  ngDoCheck(): void {

  }

  ngOnInit(): void {

  }
}
