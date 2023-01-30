import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DeckService } from '../deck/services/deck.service';
import { Observable, map, switchMap } from 'rxjs';
import { DeckCard } from '../deck/models/deckcard';
import { Player, defaultPlayer } from '../user/models/player';
import { Hand } from '../hand/models/hand';
@Component({
  selector: 'app-table-shell',
  templateUrl: './table-shell.component.html',
  styleUrls: ['./table-shell.component.scss']
})
export class TableShellComponent implements OnInit {
  gameId: number = 0;

  player_name: string | null = defaultPlayer.name;
  dealer_name: string | null = defaultPlayer.name;
  player_hand_id: number;
  dealer_hand_id: number;
  playerHand: Hand;
  dealerHand: Hand;
  thegameDeck: DeckCard[] = [];
  constructor(private route: ActivatedRoute
    ) {




   }

  ngOnInit(): void {
    this.gameId = parseInt(this.route.snapshot.paramMap.get('gameId'));
    this.player_name = this.route.snapshot.paramMap.get('player');
    this.player_hand_id = parseInt(this.route.snapshot.paramMap.get('player_hand_id'))
    this.dealer_name = this.route.snapshot.paramMap.get('dealer');

    this.dealer_hand_id = parseInt(
      this.route.snapshot.paramMap.get('dealer_hand_id')
    );
    console.log('player username', this.player_name);
    console.log('player hand ID: ', this.player_hand_id);
    console.log('dealer USERname: ', this.dealer_name);
    console.log('the dealer HAND ID:  ', this.dealer_hand_id);
    console.log('GAMEID: ',  this.gameId);
    this.route.data.subscribe((p) => {
      console.log('HAND RESOLVER: ', p);
      this.dealerHand = p['dealerHand'];
      this.playerHand = p['playerHand'];
      console.log('TABLE SHELL dealer Hand: ', this.dealerHand);
    })
  }
  getDealerName():string {
    return this.dealer_name;
  }
  getPlayerName(): string{
    return this.player_name;
  }

}
