import { Component, Input, OnInit } from '@angular/core';
import { Hand } from '../models/hand';

@Component({
  selector: 'app-handbuttons',
  templateUrl: './handbuttons.component.html',
  styleUrls: ['./handbuttons.component.scss']
})
export class HandbuttonsComponent implements OnInit {
  myColor = "blue";
  @Input() handId: number;
  constructor() { }

  ngOnInit(): void {
    console.log("INPUTTED HAND: ", this.handId);
  }

}
