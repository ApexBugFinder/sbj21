import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { DeckService } from 'src/app/deck/services/deck.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss']
})
export class NewgameComponent implements OnInit {

  dealerName: string;
  visitorplayerName: string;
  dealer$: Observable<Player>;
  vPlayer$: Observable<Player>;
  dealer: Player;
  player: Player;

  constructor(private dialogRef: MatDialogRef<NewgameComponent>,
    private playerService: PlayerService,
    private deckService: DeckService,
    private gameService: GameService,
    private router: Router) {
    this.visitorplayerName = 'test_player';
    this.dealerName = 'dealer';
    this.dealer = defaultPlayer;
    this.player = defaultPlayer;
    this.vPlayer$ = this.playerService.getPlayerByName(this.visitorplayerName);
    this.dealer$ = this.playerService.getPlayerByName(this.dealerName);

    }

  ngOnInit(): void {
    this.getVisitorGamePlayers()
  }


  game() {
    console.log('ATTEMPTING TO START NEW GAME');
    this.getVisitorGamePlayers();
    if (this.dealer.id != defaultPlayer.id && this.player.id != defaultPlayer.id) {
      this.gameService.create(this.player, this.dealer).subscribe(newGame =>{
        if (newGame) {
          console.log("FROM GAME METHOD IN newgame Component: ", newGame);
          this.router.navigate(['casino', {
            'gameId': newGame.id,
            'player': this.player.name,
            'dealer': this.dealer.name
          }]);
          this.dialogRef.close();
        }

      })

    }

  }

  login() {

  }

  getVisitorGamePlayers() {
    this.vPlayer$.subscribe(p => {
      this.player = p;
      console.log(this.player)
    })
    this.dealer$.subscribe(p => {
      this.dealer = p;
      console.log(this.dealer)
  })

  }


}
