import { Component, Input, OnInit } from '@angular/core';
import { Hand } from 'src/app/hand/models/hand';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { Store, select } from '@ngrx/store';
import * as fromDealerShell from './state'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dealer-shell',
  templateUrl: './dealer-shell.component.html',
  styleUrls: ['./dealer-shell.component.scss'],
})
export class DealerShellComponent implements OnInit {
  @Input() username: string;
  @Input() gameId: number;
  @Input() hand_id: number;
  @Input() dealerHand: Hand;
  player: Player = defaultPlayer;
  player$: Observable<Player>;
  constructor(private playerService: PlayerService,
    private dealerShellStore: Store<fromDealerShell.State>) {
    this.player$ = this.dealerShellStore.pipe(select(fromDealerShell.getPlayer));
  }

  ngOnInit(): void {
    console.log('HAND ID PASSED IN: ', this.hand_id);
    console.log('GAME_ID PASSED IN:  ', this.gameId);
    console.log('USERNAME PASS IN: ', this.username);
    this.player$.subscribe((value: Player) => (this.player = value));

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
