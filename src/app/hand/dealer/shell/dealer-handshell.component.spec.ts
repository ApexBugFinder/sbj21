import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerHandShellComponent } from './dealer-handshell.component';

describe('DealerHandShellComponent', () => {
  let component: DealerHandShellComponent;
  let fixture: ComponentFixture<DealerHandShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealerHandShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerHandShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
