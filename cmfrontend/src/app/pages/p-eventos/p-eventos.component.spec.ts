import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEventosComponent } from './p-eventos.component';

describe('PEventosComponent', () => {
  let component: PEventosComponent;
  let fixture: ComponentFixture<PEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
