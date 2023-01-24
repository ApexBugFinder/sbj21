import { Component, Input, OnInit } from '@angular/core';
import { DeckCard, defaultDeckCard } from 'src/app/deck/models/deckcard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() aCard: DeckCard = defaultDeckCard;
  constructor() { }

  ngOnInit(): void {
  }

}
