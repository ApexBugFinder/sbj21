import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnInit,
  resolveForwardRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { Hand, HandCards, HandInfo, defaultHand } from '../../models/hand';
import { HandService } from '../../services/hand.service';
import { DeckCard } from 'src/app/deck/models/deckcard';

@Component({
  selector: 'app-player-handshell',
  templateUrl: './player-handshell.component.html',
  styleUrls: ['./player-handshell.component.scss'],
})
export class PlayerHandShellComponent implements OnInit {

  @Input() player: Player;


  hand$: Observable<Hand>;
  hand: Hand;
  handcards: HandCards;
  cards: DeckCard[];
  status = '';
  constructor(
    private playerService: PlayerService,
    private handService: HandService
  ) {}

  ngOnInit(): void {

    if(this.player != defaultPlayer)
    console.log('player PASSED INTO SHELL: ', this.player);

  }


}
