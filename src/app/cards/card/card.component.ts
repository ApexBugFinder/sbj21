import { Component, Input, OnInit } from '@angular/core';
import { DeckCard, defaultDeckCard } from 'src/app/deck/models/deckcard';
import { Card, defaultCard } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() aCard: DeckCard = defaultDeckCard;
  @Input() url: string;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {

    if (this.aCard !== defaultDeckCard) {
      console.log('ID inputted into CARD COMP: ', this.id);
 console.log('A card INPUTTED to card COMPo:', this.aCard);
 console.log('A card URL INPUTTED to card COMPo:', this.url);

    }

  }

}
