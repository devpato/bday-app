import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayResultsComponent } from './bday-results.component';

describe('BdayResultsComponent', () => {
  let component: BdayResultsComponent;
  let fixture: ComponentFixture<BdayResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdayResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdayResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
