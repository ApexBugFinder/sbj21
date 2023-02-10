import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { sharedReducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { SharedEffects } from './state/shared.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    StoreModule.forFeature('shared', sharedReducers),
    EffectsModule.forFeature([SharedEffects]),
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,

    BrowserModule,
    HttpClientModule
  ]
})
export class SharedModule { }
