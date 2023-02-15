import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHandstatusComponent } from './player-handstatus.component';

describe('PlayerHandstatusComponent', () => {
  let component: PlayerHandstatusComponent;
  let fixture: ComponentFixture<PlayerHandstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHandstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHandstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
