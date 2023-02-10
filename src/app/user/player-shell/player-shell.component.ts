import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hand } from 'src/app/hand/models/hand';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { Store, select } from '@ngrx/store';
import * as fromPlayerShell from './state';

@Component({
  selector: 'app-player-shell',
  templateUrl: './player-shell.component.html',
  styleUrls: ['./player-shell.component.scss'],
})
export class PlayerShellComponent implements OnInit {
  @Input() username: string;
  @Input() gameId;
  @Input() hand_id: number;
  @Input() playerHand: Hand;
  player: Player = defaultPlayer;
  player$: Observable<Player>;
  constructor(private playerService: PlayerService,
   private playerShellStore: Store<fromPlayerShell.State> ) {
    this.player$ = this.playerShellStore.pipe(select(fromPlayerShell.getPlayer));
   }

  ngOnInit(): void {
    console.log('HAND ID PASSED IN: ', this.hand_id);
    console.log('username: ', this.username);
    console.log('HAND PASSED IN: ', this.playerHand);
    this.player$.subscribe((value: Player) => {
      this.player = value;
      console.log('PLayerShelll Player: ', this.player);
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
