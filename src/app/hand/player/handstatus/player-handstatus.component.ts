import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Hand, defaultHand } from '../../models/hand';
import { Observable, from } from 'rxjs';
import { HandService } from '../../services/hand.service';
import { PlayerService } from 'src/app/user/services/player.service';
import * as fromPlayerHand from '../../../hand/index';
import * as fromPlayerShell from '../../../user/player-shell/state';
import * as fromShared from '../../../shared/state';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-player-handstatus',
  templateUrl: './player-handstatus.component.html',
  styleUrls: ['./player-handstatus.component.scss'],
})
export class PlayerHandstatusComponent implements OnInit {


  username$: Observable<string>;
  username: string;
  status$: Observable<string>;
  playerhandstatus: string;
  turn$: Observable<Player>;
  private handId$: Observable<number>
  private hand_id: number;

  name = 'test_player';

  constructor(
    private handService: HandService,
    private playerService: PlayerService,
    private playerHandStore: Store<fromPlayerHand.State>,
    private sharedStore: Store<fromShared.SharedModuleState>,
    private playerShellStore: Store<fromPlayerShell.State>
  ) {
    this.username$ = this.playerHandStore.pipe(select(fromPlayerHand.getPlayerHandStatusUsername));
    this.status$ = this.playerHandStore.pipe(select(fromPlayerHand.getPlayerHandStatus));
    this.handId$ = this.playerHandStore.pipe(select(fromPlayerHand.getPlayerHandId));
    this.turn$ = this.sharedStore.pipe(select(fromShared.getWhoseTurn));
  }

  ngOnInit(): void {
    this.username$.subscribe((i: string) => {
      if (i) {
        this.username = i;
      } else {
        this.username = this.name;
      }
    });
    this.status$.subscribe((i: string) => {
      if (i) {
        this.playerhandstatus = i;
      }
    });
    this.handId$.subscribe((i: number) => {
      if (i) {
        this.hand_id = i;
      }
    })

    // console.log('PLAYER INTPUTED IN: ', this.player);
    // console.log('HAND ID PASSED IN: ', this.hand_id);
    // console.log('HAND PASSED IN: ', this.hand);
    // this.playerServe(this.username)
    //   .then((playr: Player) => {
    //     this.player = playr;
    //     console.log('player pulled in handstatus comp: ', this.player);
    //   })
    //   .then(() => {});
  }

  // getHandStatus(): string {
  //   return this.hand.status;
  // }

  // getHandInfo(handId: number): Promise<Hand> {
  //   let handPromise: Promise<Hand> = new Promise<Hand>((resolve, reject) => {
  //     if (!handId || handId === undefined) {
  //       reject('handId is not defined');
  //     }
  //     this.handService.getHandById(handId).subscribe((hand: Hand) => {
  //       resolve(hand);
  //     });
  //   });
  //   return handPromise;
  // }
  // playerServe(username: string): Promise<Player> {
  //   let promisePlayer: Promise<Player> = new Promise<Player>(
  //     (resolve, reject) => {
  //       if (username === undefined) {
  //         reject('the username was undefined');
  //       } else {
  //         this.playerService
  //           .getPlayerByName(username)
  //           .subscribe((result: Player) => {
  //             resolve(result);
  //           });
  //       }
  //     }
  //   );

  //   return promisePlayer;
  // }

  capitalizeFirst(stringToCap: string) {
    let first = stringToCap[0];
    let rest = stringToCap.slice(1);
    return first.toUpperCase() + rest.toLowerCase();
  }
}
