import { AfterContentInit, Component, DoCheck, Input, OnInit, resolveForwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { Hand, HandCards, HandInfo, defaultHand } from '../models/hand';
import { HandService } from '../services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';


@Component({
  selector: 'app-handshell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  @Input() player_name: string;
  @Input() player: Player;
  @Input() hand_id: number;
  @Input() gameId: number;

  @Input() hand: Hand;
  handcards: HandCards;
  cards: DeckCard[];
  status = '';
  constructor(
    private playerService: PlayerService,
    private handService: HandService
  ) {}

  ngOnInit(): void {
    console.log('HAND ID PASSED IN: ', this.hand_id);
    console.log('HAND PASSED IN: ', this.hand);
    console.log('player_name PASSED INTO SHELL: ', this.player_name);
    console.log('player PASSED INTO SHELL: ', this.player);

    if (this.hand_id) {
      this.getHandCards(this.hand_id)
        .then((rthand: HandCards) => {
          this.handcards = rthand;
          console.log('HAND RETurned to handcards Comp: ', this.handcards);
          console.log(
            'HAND [CARDS] RETurned to handcards Comp: ',
            this.handcards['cards']
          );
          console.log(
            'HAND CARDS RETurned to handcards Comp: ',
            this.handcards.cards
          );

          this.cards = this.handcards.cards;
          console.log('CARDS in CARDS COMP:', this.cards);
        })
        .catch((err) => console.log('Error retrieving HandInfo', err));
    }
  }
  getHandCards(handId: number): Promise<HandCards> {
    let handPromise: Promise<HandCards> = new Promise<HandCards>(
      (resolve, reject) => {
        if (!handId || handId === undefined) {
          reject('handId is not defined');
        }
        this.handService
          .getHandCards(handId)
          .subscribe((handCards: HandCards) => {
            resolve(handCards);
          });
      }
    );
    return handPromise;
  }




}
