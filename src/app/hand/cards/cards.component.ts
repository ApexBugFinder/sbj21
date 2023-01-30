import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Hand, HandCards } from '../models/hand';
import { HandService } from '../services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';
import { Card } from 'src/app/cards/models/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, DoCheck {
  @Input() hand_id: number;

  handcards: HandCards;
  handcards$: Observable<HandCards>;
  @Input() cards: DeckCard[] = [];
  constructor(private handService: HandService) {

    this.handcards$ = this.handService.getHandCards(this.hand_id);
  }


  ngDoCheck(): void {

  }

  ngOnInit(): void {

  }
}
