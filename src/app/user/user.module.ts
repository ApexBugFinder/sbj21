import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './login/sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {   userReducers} from './index';
import { EffectsModule } from '@ngrx/effects';
import { PlayerEffects } from './player-shell/state/player.effects';
import { DealerEffects } from './dealer-shell/state/dealer.effects';

@NgModule({
  declarations: [LoginComponent, SidenavComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', userReducers),
    EffectsModule.forFeature([PlayerEffects,DealerEffects])
  ],
  exports: [SidenavComponent, LoginComponent],

  entryComponents: [LoginComponent, SidenavComponent],
})
export class UserModule {}
