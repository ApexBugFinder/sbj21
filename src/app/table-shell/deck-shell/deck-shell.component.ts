import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DeckCard, defaultDeckCard } from 'src/app/deck/models/deckcard';
import { DeckService } from 'src/app/deck/services/deck.service';

@Component({
  selector: 'app-deck-shell',
  templateUrl: './deck-shell.component.html',
  styleUrls: ['./deck-shell.component.scss'],
})
export class DeckShellComponent implements OnInit {
  @Input() gameId:number;

  thegameDeck: DeckCard[] = [];
  bkCard: DeckCard = defaultDeckCard;
  constructor(private deckService: DeckService) {


  }

  ngOnInit(): void {

    console.log('gameId passed IN: ', this.gameId);
    if (this.gameId && this.gameId !== undefined) {
      console.log(this.gameId)
      this.createDeck(this.gameId).then((deckcards: DeckCard[]) => {
        console.log(deckcards);
        deckcards.forEach(element => {
          if (element.face === 'BK1') {
            this.bkCard = element;
            }
        });
        // this.bkCard = deckcards.reduce((prev, current) => prev || current.face === 'BK1'? current: null);
        console.log(this.gameId);
        console.log(this.bkCard)
        return deckcards;
      }).catch(err => console.log('Error return when creating newDeck', err));
    }

  }

  createDeck(gameId): Promise<DeckCard[]> {

    let createDeckPromise = new Promise<DeckCard[]>((resolve, reject) => {
      if (!gameId || gameId === undefined)
        reject('gameId is not defined');
      this.deckService.createDeck(gameId).subscribe((deckecards: DeckCard[]) => {
        resolve(deckecards);
      })
  })
    return createDeckPromise;
  }
  }
