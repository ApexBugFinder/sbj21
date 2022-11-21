import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handstatus',
  templateUrl: './handstatus.component.html',
  styleUrls: ['./handstatus.component.scss']
})
export class HandstatusComponent implements OnInit {

  name = 'Dealer'
  status = 'Play'
  constructor() { }

  ngOnInit(): void {
  }

}
