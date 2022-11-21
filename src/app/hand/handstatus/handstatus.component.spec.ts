import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandstatusComponent } from './handstatus.component';

describe('HandstatusComponent', () => {
  let component: HandstatusComponent;
  let fixture: ComponentFixture<HandstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
