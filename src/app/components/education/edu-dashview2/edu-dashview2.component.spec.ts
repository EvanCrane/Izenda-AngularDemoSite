import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDashview2Component } from './edu-dashview2.component';

describe('EduDashview2Component', () => {
  let component: EduDashview2Component;
  let fixture: ComponentFixture<EduDashview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduDashview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduDashview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
