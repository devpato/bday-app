import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayShellComponent } from './bday-shell.component';

describe('BdayShellComponent', () => {
  let component: BdayShellComponent;
  let fixture: ComponentFixture<BdayShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdayShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdayShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
