import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzendaComponent } from './izenda.component';

describe('IzendaComponent', () => {
  let component: IzendaComponent;
  let fixture: ComponentFixture<IzendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
