import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';

@Component({
  selector: 'app-player-shell',
  templateUrl: './player-shell.component.html',
  styleUrls: ['./player-shell.component.scss'],
})
export class PlayerShellComponent implements OnInit {
  @Input() username: string;
  @Input() gameId;
  @Input() hand_id: number;
  player: Player = defaultPlayer;
  player$: Observable<Player>;
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    console.log('HAND ID PASSED IN: ', this.hand_id);
    console.log('username: ', this.username);

    this.playerServe(this.username).then((playr: Player) => {
      this.player = playr;
    })
  }
  //  PLAYER METHODS


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
