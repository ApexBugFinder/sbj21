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
  @Input() hand: Hand;

  constructor(private handService: HandService) {}

  ngOnInit(): void {
    console.log('HAND INPUTTED: ', this.hand);


  }
 
}
