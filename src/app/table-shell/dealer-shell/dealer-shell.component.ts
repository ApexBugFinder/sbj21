import { Component, Input, OnInit } from '@angular/core';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';

@Component({
  selector: 'app-dealer-shell',
  templateUrl: './dealer-shell.component.html',
  styleUrls: ['./dealer-shell.component.scss'],
})
export class DealerShellComponent implements OnInit {
  @Input() username: string;
  @Input() gameId: number;
  @Input() hand_Id: number;
  player: Player = defaultPlayer;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    console.log('HAND ID PASSED IN: ', this.hand_Id);
    console.log('GAME_ID PASSED IN:  ', this.gameId);
    console.log('USERNAME PASS IN: ', this.username);

    this.playerServe(this.username).then((playr: Player) => {
      this.player = playr;
    });
  }
  playerServe(username: string): Promise<Player> {
    let promisePlayer: Promise<Player> = new Promise<Player>(
      (resolve, reject) => {
        if (username === undefined) {
          reject('the username was undefined');
        } else {
          this.playerService
            .getPlayerByName(username)
            .subscribe((result: Player) => {
              resolve(result);
            });
        }
      }
    );

    return promisePlayer;
  }
}
