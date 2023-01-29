import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../models/hand';
import { HandService } from '../services/hand.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @Input() h_value: number;
  @Input() l_value: number;
  @Input() cards_count: number;
  @Input() hand_id: number;
  public hand: Hand;

  constructor(private handService: HandService) {}

  ngOnInit(): void {
    console.log('HAND ID INPUTTED: ', this.hand_id);

    if (this.hand_id && this.hand_id !== undefined) {
      this.getHandInfo(this.hand_id)
        .then((rthand: Hand) => {
          this.hand = rthand;
          console.log('HAND RETurned: ', this.hand);
        })
        .catch((err) => console.log('Error retrieving HandInfo', err));
    }
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
