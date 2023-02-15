import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandbuttonsComponent } from './handbuttons/handbuttons.component';
import { DealerCardsComponent } from './dealer/cards/dealer-cards.component';
import { SharedModule } from '../shared/shared.module';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CardsModule } from '../cards/cards.module';
import { HandService } from './services/hand.service';
import { PlayerHandResolver } from './services/hand.player.resolver';
import { DealerHandResolver } from './services/hand.dealer.resolver';
import { StoreModule } from '@ngrx/store';
import { handReducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { DealerHandEffects } from './dealer/shell/state/dealer-hand.effects';
import { DealerResultsComponent } from './dealer/results/dealer-results.component';
import { DealerHandstatusComponent } from './dealer/handstatus/dealer-handstatus.component';
import { DealerHandShellComponent } from './dealer/shell/dealer-handshell.component';
import { MaterialModule } from '../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PlayerHandCardsComponent } from './player/cards/player-handcards.component';
import { PlayerHandstatusComponent } from './player/handstatus/player-handstatus.component';
import { PlayerResultsComponent } from './player/results/player-results.component';
import { PlayerHandShellComponent } from './player/shell/player-handshell.component';
import { PlayerHandEffects } from './player/shell/state/player-hand.effects';


@NgModule({
  declarations: [
    DealerHandstatusComponent,
    HandbuttonsComponent,
    DealerCardsComponent,
    DealerResultsComponent,
    DealerHandShellComponent,
    PlayerHandCardsComponent,
    PlayerHandstatusComponent,
    PlayerResultsComponent,
    PlayerHandShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BrowserModule,
    CardsModule,
    StoreModule.forFeature('hands', handReducers),
    EffectsModule.forFeature([DealerHandEffects, PlayerHandEffects]),
  ],
  exports: [
    DealerHandstatusComponent,
    HandbuttonsComponent,
    DealerCardsComponent,
    DealerResultsComponent,
    DealerHandShellComponent,
    PlayerHandCardsComponent,
    PlayerResultsComponent,
    PlayerHandShellComponent
  ],
  entryComponents: [DealerHandShellComponent, PlayerHandShellComponent],
  providers: [HandService, PlayerHandResolver, DealerHandResolver],
})
export class HandModule {}
