import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckShellComponent } from './deck-shell/deck-shell.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from '../cards/card/card.component';
import { CardsModule } from '../cards/cards.module';
import { StoreModule } from '@ngrx/store';
import { deckReducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { DeckShellEffects } from './deck-shell/state/deckshell-effects';
import { DeckService } from './services/deck.service';
import { DeckCardService } from './services/deckcard.service';



@NgModule({
  declarations: [DeckShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardsModule,
    StoreModule.forFeature('deck', deckReducers),
    EffectsModule.forFeature([DeckShellEffects])
  ],
  exports: [DeckShellComponent],
  providers: [DeckService, DeckCardService],
  entryComponents: [
    DeckShellComponent
  ]
})
export class DeckModule { }
