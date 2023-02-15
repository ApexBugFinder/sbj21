import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerResultsComponent } from './dealer-results.component';

describe('DealerResultsComponent', () => {
  let component: DealerResultsComponent;
  let fixture: ComponentFixture<DealerResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
