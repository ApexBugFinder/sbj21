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
import { Store, select } from '@ngrx/store';
import * as fromDealerHandStatus from '../handstatus/state';
import * as DealerHandStatusActions from '../handstatus/state/dealer-handstatus.actions';
@Component({
  selector: 'app-dealer-handshell',
  templateUrl: './dealer-handshell.component.html',
  styleUrls: ['./dealer-handshell.component.scss'],
})
export class DealerHandShellComponent implements OnInit {
  player_name: string;
  @Input() player: Player;

  player_name$: Observable<string>;

  @Input() hand: Hand;
  handcards: HandCards;
  cards: DeckCard[];
  status = '';
  constructor(
    private playerService: PlayerService,
    private handService: HandService,
    private dealHandStatusStore: Store<fromDealerHandStatus.State>
  ) {

  }

  ngOnInit(): void {


    if (this.player != defaultPlayer)
    console.log('Dealer PASSED INTO SHELL: ', this.player);



  }

}
