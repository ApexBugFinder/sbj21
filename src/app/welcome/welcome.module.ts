import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { NewgameComponent } from './newgame/newgame.component';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SplashComponent, NewgameComponent],
  imports: [
    SharedModule,
     CommonModule],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
})
export class WelcomeModule {}
