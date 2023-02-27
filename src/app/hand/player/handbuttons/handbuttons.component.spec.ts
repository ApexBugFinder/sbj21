import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbuttonsComponent } from './handbuttons.component';

describe('HandbuttonsComponent', () => {
  let component: HandbuttonsComponent;
  let fixture: ComponentFixture<HandbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
