import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduDashview1Component } from './edu-dashview1.component';

describe('EduDashview1Component', () => {
  let component: EduDashview1Component;
  let fixture: ComponentFixture<EduDashview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduDashview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduDashview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
