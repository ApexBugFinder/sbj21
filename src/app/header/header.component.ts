import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userIcon = faUser;
  @Output() sidenav_toggle: EventEmitter<Event> = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    console.log('HELLO from Header toggle method');
    this.sidenav_toggle.emit();
  }
}
