import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../../models/hand';
import { HandService } from '../../services/hand.service';
import { Observable } from 'rxjs';
import * as fromDealerHand from '../../index';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-dealer-results',
  templateUrl: './dealer-results.component.html',
  styleUrls: ['./dealer-results.component.scss'],
})
export class DealerResultsComponent implements OnInit {
  h_value$: Observable<number>;
  l_value$: Observable<number>;
  hand_id$: Observable<number>;
  player_lim$: Observable<number>;
  h_value: number;
  l_value: number;
  private hand_id: number;
  player_lim: number;
  cards_count$: Observable<number>;

  cards_count: number;



  constructor(private handService: HandService,
    private dealerHandStore: Store<fromDealerHand.State>) {

    this.h_value$ = this.dealerHandStore.pipe(select(fromDealerHand.getDealerHand_h_value));
    this.l_value$ = this.dealerHandStore.pipe(
      select(fromDealerHand.getDealerHand_l_value)
    );
    this.player_lim$ = this.dealerHandStore.pipe(
      select(fromDealerHand.getDealerHand_player_lim)
    );
    this.hand_id$ = this.dealerHandStore.pipe(
      select(fromDealerHand.getDealerHand_handId)
    );
    this.cards_count$ = this.dealerHandStore.pipe(
      select(fromDealerHand.getDealerHandCardsCount)
    );
    }


  ngOnInit(): void {
    this.h_value$.subscribe((i: number) => {
      this.h_value = i;
    });
    this.l_value$.subscribe((i: number) => {
      this.l_value = i;
    });
    this.player_lim$.subscribe((i: number) => {
      this.player_lim = i;
    });
    this.hand_id$.subscribe((i: number) => {
      this.hand_id = i;
    });
    this.cards_count$.subscribe((i: number) => {
      this.cards_count = i;
    })
  }
}
