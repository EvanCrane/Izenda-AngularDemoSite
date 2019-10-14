import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDashview2Component } from './gov-dashview2.component';

describe('GovDashview2Component', () => {
  let component: GovDashview2Component;
  let fixture: ComponentFixture<GovDashview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovDashview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovDashview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
