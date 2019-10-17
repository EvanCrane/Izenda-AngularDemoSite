import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzNavComponent } from './iz-nav.component';

describe('IzNavComponent', () => {
  let component: IzNavComponent;
  let fixture: ComponentFixture<IzNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
