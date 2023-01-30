import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { TableShellComponent } from './table-shell/table-shell.component';
import { DeckShellComponent } from './table-shell/deck-shell/deck-shell.component';
import { DealerShellComponent } from './table-shell/dealer-shell/dealer-shell.component';
import { PlayerShellComponent } from './table-shell/player-shell/player-shell.component';
import { HandModule } from './hand/hand.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavComponent } from './user/login/sidenav/sidenav.component';
import { CardsModule } from './cards/cards.module';
import { UserModule } from './user/user.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HandService } from './hand/services/hand.service';
import { PlayerHandResolver } from './hand/services/hand.player.resolver';
import { DealerHandResolver } from './hand/services/hand.dealer.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableShellComponent,
    DeckShellComponent,
    DealerShellComponent,
    PlayerShellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CardsModule,
    HandModule,
    FontAwesomeModule,
    UserModule,
  ],
  exports: [PlayerShellComponent, TableShellComponent],

  providers: [HandService, PlayerHandResolver, DealerHandResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
