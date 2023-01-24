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
  @Input() gameId:Number =0;

  thegameDeck: DeckCard[] = [];
  bkCard: DeckCard = defaultDeckCard;
  constructor(private deckService: DeckService) {

    console.log(this.gameId)
  }

  ngOnInit(): void {
this.deckService.createDeck(this.gameId).subscribe((deckcards: DeckCard[]) => {
        console.log(deckcards);
        this.bkCard = deckcards.filter(i => i.face == 'BK1')[0];
        console.log(this.gameId);
        console.log(this.bkCard)
        return deckcards;
      });
    }
  }
