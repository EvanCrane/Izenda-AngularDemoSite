import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDashboard1Component } from './gov-dashboard1.component';

describe('GovDashboard1Component', () => {
  let component: GovDashboard1Component;
  let fixture: ComponentFixture<GovDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
