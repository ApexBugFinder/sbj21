import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { Hand, defaultHand } from '../models/hand';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-handstatus',
  templateUrl: './handstatus.component.html',
  styleUrls: ['./handstatus.component.scss'],
})
export class HandstatusComponent implements OnInit {
  @Input() player: Player;
  @Input() hand: Hand;
  @Input() hand_id: number;
  name = 'Dealer';

  constructor() {}

  ngOnInit(): void {
    console.log('PLAYER INTPUTED IN: ', this.player);
    console.log('HAND ID INPUTED', this.hand_id);

  }

  getHandStatus(): string {
    return this.hand.status;
  }
}
