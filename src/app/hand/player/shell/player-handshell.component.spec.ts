import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHandShellComponent } from './player-handshell.component';

describe('PlayerHandShellComponent', () => {
  let component: PlayerHandShellComponent;
  let fixture: ComponentFixture<PlayerHandShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerHandShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerHandShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
