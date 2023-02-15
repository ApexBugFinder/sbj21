import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHandCardsComponent } from './player-handcards.component';

describe('PlayerHandCardsComponent', () => {
  let component: PlayerHandCardsComponent;
  let fixture: ComponentFixture<PlayerHandCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHandCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHandCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
