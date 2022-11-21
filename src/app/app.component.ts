import { Component, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened: boolean = false;
  title = 'sbj';

  toggle() {
    this.opened = !this.opened;
    console.log(`HELLO from APP Component ${this.opened }`);
  }

}
