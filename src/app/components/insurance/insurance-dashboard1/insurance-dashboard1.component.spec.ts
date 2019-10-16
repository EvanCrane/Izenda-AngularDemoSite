import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDashboard1Component } from './insurance-dashboard1.component';

describe('InsuranceDashboard1Component', () => {
  let component: InsuranceDashboard1Component;
  let fixture: ComponentFixture<InsuranceDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
