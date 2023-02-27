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


  constructor() { }

  ngOnInit(): void {

    if (this.aCard !== defaultDeckCard) {

 console.log('A card INPUTTED to card COMPo:', this.aCard);


    }

  }

}
