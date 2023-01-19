import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash/splash.component';
import { NewgameComponent } from './newgame/newgame.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SplashComponent,
    NewgameComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WelcomeModule { }
