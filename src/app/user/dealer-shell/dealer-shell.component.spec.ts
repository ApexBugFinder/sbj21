import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerShellComponent } from './dealer-shell.component';

describe('DealerShellComponent', () => {
  let component: DealerShellComponent;
  let fixture: ComponentFixture<DealerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
