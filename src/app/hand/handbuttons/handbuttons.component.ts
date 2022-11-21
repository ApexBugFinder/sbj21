import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handbuttons',
  templateUrl: './handbuttons.component.html',
  styleUrls: ['./handbuttons.component.scss']
})
export class HandbuttonsComponent implements OnInit {
  myColor = "blue";
  constructor() { }

  ngOnInit(): void {
  }

}
