import { AfterContentInit, Component, DoCheck, Input, OnInit, resolveForwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { Hand, HandInfo, defaultHand } from '../models/hand';
import { HandService } from '../services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';


@Component({
  selector: 'app-handshell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit{
  @Input() player_name: string;
  @Input() player: Player;
  @Input() hand_id: number;

  
  public hand: Hand;
  cards: DeckCard[];
  status = '';
  constructor(
    private playerService: PlayerService,
    private handService: HandService
  ) { }

  ngOnInit(): void {
    console.log('HAND ID PASSED IN: ', this.hand_id);

    if (this.hand_id && this.hand_id !== undefined) {
      this.getHandInfo(this.hand_id).then((rthand: Hand) => {
        this.hand = rthand;
        console.log('HAND RETurned: ', this.hand)
      }).catch(err => console.log('Error retrieving HandInfo', err));


    }
    // if (this.player_name  || this.player_name !== undefined) {
    //   this.getPlayer(this.player_name)
    //     .then((player: Player) => {
    //       this.setPlayer(player);
    //       console.log(
    //         'RETURNED Player from getPlayer in shell.component: ',
    //         this.player
    //       );
    //     })
    //     .then(() => {
    //       console.log(this.player);
    //       if (this.hand_id && this.hand_id !== undefined)
    //         this.newhand(this.hand_id)
    //           .then((rthand: Hand) => {
    //             this.setHand(rthand[0]);

    //             console.log(
    //               'Hand returned to Shell Component from HandService: ',
    //               this.hand
    //             );
    //             return this.hand;
    //           })
    //           .catch((err) =>
    //             console.log('Error returning hand to shell component: ', err)
    //           );
    //     })
    //     .catch((err) =>
    //       console.log('Error occured getting player in shell component: ', err)
    //     );
    }

  // newhand(handId: number): Promise<Hand> {

  //   let handPromise: Promise<Hand> = new Promise<Hand>((resolve, reject) => {
  //     if (!handId || handId === undefined) {
  //       reject('No handId supplied');
  //     }
  //     this.handService.getHandById(handId).subscribe((hand: Hand) => {
  //       resolve(hand);
  //     });
  //   });
  //   return handPromise;
  // }

  // getPlayer(username: string): Promise<Player> {
  //   let playerPromise: Promise<Player> = new Promise<Player>(
  //     (resolve, reject) => {
  //       if (username === undefined)
  //         reject('username is not defined')
  //       this.playerService
  //         .getPlayerByName(username)
  //         .subscribe((player: Player) => {
  //           resolve(player);
  //         });
  //     }
  //   );
  //   return playerPromise;
  // }
  setPlayer(p: Player) {
    this.player = p;
  }
  setHand(h: Hand) {
    this.status = h.status;
    this.hand = h;
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



}
