import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Hand, defaultHand } from '../../models/hand';
import { Observable } from 'rxjs';
import { HandService } from '../../services/hand.service';
import { PlayerService } from 'src/app/user/services/player.service';
import { Store, select } from '@ngrx/store';
import * as fromShared from '../../../shared/state';
import * as fromDealerHand from '../../index';
import * as fromDealerHandStatus from '../handstatus/state';
@Component({
  selector: 'app-dealer-handstatus',
  templateUrl: './dealer-handstatus.component.html',
  styleUrls: ['./dealer-handstatus.component.scss'],
})
export class DealerHandstatusComponent implements OnInit {

  @Input() gameId: number;


  username$: Observable<string>;
  username: string;
  name = 'Dealer';
  status$: Observable<string>;
  status: string;
  hand_id$: Observable<number>;
  private hand_id: number;
  turn$: Observable<Player>;

  constructor(
    private handService: HandService,
    private playerService: PlayerService,
    private dealerHandStore: Store<fromDealerHand.State>,
    private sharedStore: Store<fromShared.SharedModuleState>
  ) {
    this.username$ = this.dealerHandStore.pipe(select(fromDealerHand.getDealerHandStatusUsername));
    this.status$ = this.dealerHandStore.pipe(select(fromDealerHand.getDealerHandStatus));
    this.hand_id$ = this.dealerHandStore.pipe(select(fromDealerHand.getDealerHandId));
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
        this.status = i;
      }
  })

  }
  capitalizeFirst(stringToCap: string): string{
    if (stringToCap) {
      let first = stringToCap[0];
      let rest = stringToCap.slice(1);

      return first.toUpperCase() + rest.toLowerCase();
    }
    return 'Dealer';
  }
}
