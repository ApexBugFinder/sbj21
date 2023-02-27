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




  player: Player = defaultPlayer;
  player$: Observable<Player>;
  constructor(private playerService: PlayerService,
    private dealerShellStore: Store<fromDealerShell.State>) {
    this.player$ = this.dealerShellStore.pipe(select(fromDealerShell.getPlayer));
  }

  ngOnInit(): void {

    this.player$.subscribe((value: Player) => {
      this.player = value
      if (this.player != defaultPlayer)
        console.log('DealerShell Player: ', this.player);
    });

  }

}
