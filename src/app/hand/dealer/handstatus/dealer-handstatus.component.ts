import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Hand, defaultHand } from '../../models/hand';
import { Observable } from 'rxjs';
import { HandService } from '../../services/hand.service';
import { PlayerService } from 'src/app/user/services/player.service';

@Component({
  selector: 'app-dealer-handstatus',
  templateUrl: './dealer-handstatus.component.html',
  styleUrls: ['./dealer-handstatus.component.scss'],
})
export class DealerHandstatusComponent implements OnInit {
  @Input() player: Player;
  @Input() gameId: number;
  @Input() username: string;
  @Input() hand: Hand;
  @Input() hand_id: number;
  name = 'Dealer';

  constructor(
    private handService: HandService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    console.log('PLAYER INTPUTED IN: ', this.player);
    console.log('HAND ID PASSED IN: ', this.hand_id);
    console.log('HAND PASSED IN: ', this.hand);
    this.playerServe(this.username)
      .then((playr: Player) => {
        this.player = playr;
        console.log('player pulled in handstatus comp: ', this.player);
      })
      .then(() => {});
  }

  getHandStatus(): string {
    return this.hand.status;
  }

  getHandInfo(handId: number): Promise<Hand> {
    let handPromise: Promise<Hand> = new Promise<Hand>((resolve, reject) => {
      if (!handId || handId === undefined) {
        reject('handId is not defined');
      }
      this.handService.getHandById(handId).subscribe((hand: Hand) => {
        resolve(hand);
      });
    });
    return handPromise;
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

  capitalizeFirst(stringToCap: string) {
    let first = stringToCap[0];
    let rest = stringToCap.slice(1);
    return first.toUpperCase() + rest;
  }
}
