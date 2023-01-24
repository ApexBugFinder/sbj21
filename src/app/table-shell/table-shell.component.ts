import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DeckService } from '../deck/services/deck.service';
import { Observable, map, switchMap } from 'rxjs';
import { DeckCard } from '../deck/models/deckcard';
@Component({
  selector: 'app-table-shell',
  templateUrl: './table-shell.component.html',
  styleUrls: ['./table-shell.component.scss']
})
export class TableShellComponent implements OnInit {
  gameId: Number = 0;
  gameDeck$: Observable<DeckCard[]>;
  player_name: String|null = '';
  thegameDeck: DeckCard[] = [];
  constructor(private route: ActivatedRoute,
    private deckService: DeckService) {
    this.gameDeck$ = this.deckService.createDeck(this.gameId);


   }

  ngOnInit(): void {
    let gId = Number(this.route.snapshot.paramMap.get('gameId'));
    this.player_name = this.route.snapshot.paramMap.get('player');
    let dealer_name = this.route.snapshot.paramMap.get('dealer');
    console.log(this.player_name);
    this.gameId = gId;
  }

}
