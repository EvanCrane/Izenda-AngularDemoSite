import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDashboard1Component } from './edu-dashboard1.component';

describe('EduDashboard1Component', () => {
  let component: EduDashboard1Component;
  let fixture: ComponentFixture<EduDashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduDashboard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduDashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
