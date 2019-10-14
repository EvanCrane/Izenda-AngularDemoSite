import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDashboard1Component } from './health-dashboard1.component';

describe('HealthDashboard1Component', () => {
  let component: HealthDashboard1Component;
  let fixture: ComponentFixture<HealthDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
