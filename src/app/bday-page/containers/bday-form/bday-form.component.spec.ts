import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayFormComponent } from './bday-form.component';

describe('BdayFormComponent', () => {
  let component: BdayFormComponent;
  let fixture: ComponentFixture<BdayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
