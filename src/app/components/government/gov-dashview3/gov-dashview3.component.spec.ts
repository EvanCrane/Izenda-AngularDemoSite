import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDashview3Component } from './gov-dashview3.component';

describe('GovDashview3Component', () => {
  let component: GovDashview3Component;
  let fixture: ComponentFixture<GovDashview3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovDashview3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovDashview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
