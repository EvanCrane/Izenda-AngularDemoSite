import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDashview1Component } from './gov-dashview1.component';

describe('GovDashview1Component', () => {
  let component: GovDashview1Component;
  let fixture: ComponentFixture<GovDashview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovDashview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovDashview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
